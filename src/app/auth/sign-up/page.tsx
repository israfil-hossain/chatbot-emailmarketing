import SignUpFormProvider from '@/components/forms/sign-up/form-provider'
import React from 'react'

type Props = {}

const Signup = (props: Props) => {
  return (
    <div className='flex-1 py-36 md:px-16 w-full'>
      <div className='flex flex-col h-full gap-3'>
        <SignUpFormProvider>
          
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default Signup