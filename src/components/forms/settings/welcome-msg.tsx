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


const WelcomeMessageSetting = (props: Props) => {
  return (
    <div>WelcomeMessageSetting</div>
  )
}

export default WelcomeMessageSetting