"use client"; 

import { useSignInForm } from '@/hooks/sign-in/use-sign-in';
import React from 'react'

type Props = {
    children: React.ReactNode
}

const SignInProvider = ({children}: Props) => {
  const { methods, onHandleSubmit, loading } = useSignInForm()
  return (
    <div>SignInProvider</div>
  )
}

export default SignInProvider