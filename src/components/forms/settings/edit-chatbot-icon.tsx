import Section from '@/components/section-label'
import UploadButton from '@/components/upload-button'
import { BotIcon } from '@/icons/bot-icon'
import Image from 'next/image'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  setValue: UseFormSetValue<FieldValues>
  chatBot: {
    id: string
    icon: string | null
    welcomeMessage: string | null
  } | null
}

const EditChatbotIcon = ({ register, errors, setValue, chatBot}: Props) => {
  console.log("chat bot icon ", chatBot?.icon)
  return (
    <div className='py-5 flex flex-col gap-5 items-start'>
      <Section label="Chatbot Icon"
        message="Upload your chatbot icon" />
      <UploadButton
        setValue={setValue}
        register={register}
        label="Upload Icon"
        errors={errors}
      />
      {
        chatBot?.icon ? (
          <div className='rounded-full overflow-hidden'>
            <Image 
              src={chatBot.icon}
              alt="icon"
              width={100}
              height={100}
              className='w-20 h-20'
            />
          </div>
        ): (
          <div className='rounded-full cursor-pointer shadow-md w-20 h-20 flex items-center justify-center bg-primary-foreground'>
            <BotIcon />
          </div>
        )
      }
    </div>
  )
}

export default EditChatbotIcon
