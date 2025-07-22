import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    register:UseFormRegister<FieldValues>
    errors:FieldErrors<FieldValues>
    chatBot:{
        id: string 
        icon: string | null 
        welcomeMessage: string | null 
    } | null
}

const EditChatbotIcon = (props: Props) => {
  return (
    <div>EditChatbotIcon</div>
  )
}

export default EditChatbotIcon