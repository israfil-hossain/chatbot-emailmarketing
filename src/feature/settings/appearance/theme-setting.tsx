import React from 'react'
import SettingsPageLayout from '../components/SettingLayout'
import { AppearanceForm } from './appearance-form'

type Props = {}

const ThemeSettingPage = (props: Props) => {
  return (
     <div>
        <AppearanceForm />
     </div>
  )
}

export default ThemeSettingPage