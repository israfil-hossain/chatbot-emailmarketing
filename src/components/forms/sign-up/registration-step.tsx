'use client'
import { useAuthContextHook } from '@/context/use-auth-context';
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelection from './type-selection-form';
import dynamic from 'next/dynamic';
import { Spinner } from '@/components/spinner';

const DetailForm = dynamic(() => import('./account-details-form'), {
    ssr: false,
    loading: Spinner,
  })

const RegistrationFormStep = () => {
    const {
        register,
        formState: { errors },
        setValue
    } = useFormContext();

    const { currentStep } = useAuthContextHook();
    const [onOTP, setOnOTP] = useState<string>('');
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner');

    setValue('otp', onOTP);

    switch (currentStep) {
        case 1:
            return (
                <TypeSelection
                    register={register}
                    userType={onUserType}
                    setUserType={setOnUserType}
                />
            )
        case 2: return(
            <DetailForm errors={errors} register={register}></DetailForm>
        )
        case 3:
    }

    return (
        <div>registration-step</div>
    )
}

export default RegistrationFormStep