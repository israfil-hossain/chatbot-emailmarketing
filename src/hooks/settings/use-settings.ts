import { onUpdatePassword } from "@/actions/settings"
import { ChangePasswordProps, ChangePasswordSchema } from "@/schemas/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
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