'use client';
import { onIntegrateDomain } from "@/actions/settings";
import { AddDomainSchema } from "@/schemas/settings.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useDomain = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FieldValues>({
        resolver: zodResolver(AddDomainSchema)
    });

    const pathname = usePathname();
    const [loading, setIsLoading] = useState<boolean>(false);
    const [isDomain, setIsDomain] = useState<string | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        setIsDomain(pathname.split('/').pop());
    }, [pathname]);

    const onAddDomain = handleSubmit(async (values: FieldValues) => {
        setIsLoading(true);

        try {
            // Prepare file upload
            const formData = new FormData();
            formData.append('file', values.image[0]);

            // Upload image to Cloudinary via your API
            const uploadRes = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const uploadData = await uploadRes.json();

            if (!uploadRes.ok) {
                throw new Error(uploadData.error || 'Image upload failed');
            }

            // Now add the domain in db here.. 
            const domain = await onIntegrateDomain(values.domain, uploadData.url)

            if (domain) {
                reset()
                setIsLoading(false);
                if (domain.status == 200) {
                    toast.success(domain.message || "success")
                }
                else {
                    toast.error(domain.message || "Error")
                }
            }

           router.refresh(); 
        } catch (error) {
            // Handle error (show toast, etc.)
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    });

    return {
        register,
        handleSubmit: onAddDomain,
        errors,
        loading,
        isDomain,
    };
};