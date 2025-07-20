import React from 'react'
import SettingsPageLayout from '../components/SettingLayout'
import { AppearanceForm } from './appearance-form'

type Props = {}

const ThemeSettingPage = (props: Props) => {
  return (
     <div className='min-h-[100vh]'>
        <AppearanceForm />
     </div>
  )
}

export default ThemeSettingPage