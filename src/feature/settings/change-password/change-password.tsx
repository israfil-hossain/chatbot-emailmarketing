'use client';
import { useChangePassword } from '@/hooks/settings/use-settings'
import React from 'react'
import SettingsPageLayout from '../components/SettingLayout';

type Props = {}

const ChangePasswordPage = (props: Props) => {
  const { register, errors, onChangePassword, loading } = useChangePassword();
  return (
    <div>Change Password </div>
  )
}

export default ChangePasswordPage