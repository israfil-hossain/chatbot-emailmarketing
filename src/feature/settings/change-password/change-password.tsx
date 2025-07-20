'use client';
import { useChangePassword } from '@/hooks/settings/use-settings'
import React from 'react'
import SettingsPageLayout from '../components/SettingLayout';
import Section from '@/components/section-label';
import FormGenerator from '@/components/forms/form-generator';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/loader';
import { FormDescription, FormLabel } from '@/components/ui/form';

type Props = {}

const ChangePasswordPage = (props: Props) => {
  const { register, errors, onChangePassword, loading } = useChangePassword();
  return (
    <div className="flex flex-col space-y-5">
      <div className=''>
        <Section label="Change Password"
          message="Reset your password"
        />

      </div>
      <form
        onSubmit={onChangePassword}
        className='lg:col-span-4'
      >
        <div className='lg:w-[400px] flex flex-col gap-3'>
          <FormGenerator
            register={register}
            errors={errors}
            name="password"
            placeholder="New Password"
            type="text"
            inputType="input"
          />
          <FormGenerator
            register={register}
            errors={errors}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="text"
            inputType="input"
          />
          <Button type='submit' className="bg-primary text-gray-100 font-semibold w-40">
            <Loader loading={loading}>
              Change Password
            </Loader>
          </Button>
        </div>
      </form>

    </div>
  )
}

export default ChangePasswordPage