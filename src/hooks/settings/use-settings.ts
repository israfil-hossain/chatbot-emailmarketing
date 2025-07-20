import { onChatBotImageUpdate, onDeleteUserDomain, onUpdateDomain, onUpdatePassword, onUpdateWelcomeMessage } from "@/actions/settings"
import { uploadToCloudinary } from "@/actions/upload"
import { ChangePasswordProps, ChangePasswordSchema } from "@/schemas/auth.schema"
import { DomainSettingsProps, DomainSettingsSchema } from "@/schemas/settings.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

export const useChangePassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ChangePasswordProps>({
        resolver: zodResolver(ChangePasswordSchema),
        mode: 'onChange'
    })

    const [loading, setLoading] = useState<boolean>(false)

    const onChangePassword = handleSubmit(async (values) => {
        try {
            setLoading(true)
            const update = await onUpdatePassword(values.password)
            if (update) {
                reset()
                setLoading(false);
                toast.success(update.message)
            }
        }
        catch (err) {
            console.log(err);
        }
    })

    return {
        register,
        errors,
        onChangePassword,
        loading
    }
}

export const useSetting = (id: string) => {
    const {
        register, handleSubmit, formState: { errors }, reset
    } = useForm<DomainSettingsProps>({
        resolver: zodResolver(DomainSettingsSchema)
    })
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)
    const [deleting, setDeleting] = useState<boolean>(false)
    
    const onUpdateSettings = handleSubmit(async (values) => {
        setLoading(true)
        if (values.domain) {
            const domain = await onUpdateDomain(id, values.domain);
            if (domain) {
                toast.success(domain.message)
            }
        }
        if (values.image[0]) {
            let uploadedUrl = ''
            if (values.image instanceof File) {
                const uploadRes = await uploadToCloudinary(values.image)
                uploadedUrl = uploadRes.url
            } else {
                toast.error("Please upload a valid image")
                setLoading(false)
                return
            }

            const image = await onChatBotImageUpdate(id,uploadedUrl)
            if(image){
                toast.success(image.message)
            }
            setLoading(false); 
           
        }
        if(values.welcomeMessage){
            const wmessage = await onUpdateWelcomeMessage(values.welcomeMessage,id); 
            if(wmessage){
                toast.success(wmessage.message); 
            }
        }
        reset() 
        router.refresh() 
        setLoading(false)
    })

    const onDeleteDomain = async () => {
        setDeleting(true)
        const deleted = await onDeleteUserDomain(id);
        if(deleted){
            toast.success(deleted.message) 
            setDeleting(false) 
            router.refresh(); 
        }
    }

    return {
        register, 
        onUpdateSettings, 
        errors, 
        loading, 
        onDeleteDomain, 
        deleting, 

    }
}