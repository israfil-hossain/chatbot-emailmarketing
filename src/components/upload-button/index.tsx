// UploadButton.tsx
'use client'

import React, { useRef, useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Edit } from 'lucide-react'
import { ErrorMessage } from '@hookform/error-message'

type Props = {
    register: UseFormRegister<any>
    errors: FieldErrors<FieldValues>
    label: string
    setValue: any;
}

const UploadButton = ({ errors, label, register, setValue }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const preview = URL.createObjectURL(file)
        setPreviewUrl(preview)

        // 👇 these two lines are required
        register('image', { required: true })
        setValue('image', file)
    }

    return (
        <>
            <div className='flex gap-2 items-center'>
                <Label
                    htmlFor='upload-button'
                    className='flex gap-2 p-3 rounded-lg bg-cream text-gray-600 dark:text-gray-300 cursor-pointer font-semibold text-sm items-center'
                >
                    <Input
                        {...register('image')}
                        className='hidden'
                        type='file'
                        id='upload-button'
                        onChange={handleChange}
                    />
                    <Edit />
                    {label}
                </Label>

                <p className='text-sm text-gray-400 ml-6'>
                    Recommended size is 300px * 300px, less than 2MB
                </p>
            </div>

            {previewUrl && (
                <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-16 h-16 object-cover mt-2 rounded border"
                />
            )}
            <ErrorMessage
                errors={errors}
                name="image"
                render={({ message }) => (
                    <p className='text-red-400 mt-2'>
                        {message === "Required" ? '' : message}
                    </p>
                )}
            />
        </>
    )
}

export default UploadButton
