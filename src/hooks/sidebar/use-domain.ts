'use client';
import { onIntegrateDomain } from "@/actions/settings";
import { uploadToCloudinary } from "@/actions/upload";
import { AddDomainSchema } from "@/schemas/settings.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useDomain = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<FieldValues>({
        resolver: zodResolver(AddDomainSchema)
    });

    const pathname = usePathname();
    const [loading, setIsLoading] = useState<boolean>(false);
    const [isDomain, setIsDomain] = useState<string | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        setIsDomain(pathname.split('/').pop());
    }, [pathname]);



    const submit = async (values: FieldValues) => {
        setIsLoading(true)
        try {
            let uploadedUrl = ''
            if (values.image instanceof File) {
                const uploadRes = await uploadToCloudinary(values.image)
                uploadedUrl = uploadRes.url
            } else {
                toast.error("Please upload a valid image")
                setIsLoading(false)
                return
            }

            const domain = await onIntegrateDomain(values.domain, uploadedUrl)

            if (domain) {
                reset()
                if (domain.status === 200) {
                    toast.success(domain.message || "Success")
                } else {
                    toast.error(domain.message || "Error")
                }
                router.refresh()
            }
        } catch (err) {
            console.error(err)
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    return {
        register,
        onAddDomain: handleSubmit(submit),
        errors,
        loading,
        isDomain,
        setValue,
    };
};
