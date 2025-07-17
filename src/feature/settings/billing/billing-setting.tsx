import { onGetSubscriptionPlan } from '@/actions/settings'
import React from 'react'

import { Plus } from 'lucide-react';
import Section from '@/components/section-label';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import SettingsPageLayout from '../components/SettingLayout';

type Props = {}

const BillingSettingPage = async (props: Props) => {
  const plan = await onGetSubscriptionPlan();

  return (
   
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
        <div className='lg:col-span-1'>
          <Section label="Billing Setting"
            message="Add payment information, upgrade and modify your plan." />
        </div>
        <div className='lg:col-span-2  flex justify-start lg:justify-center'>
          <Card className='border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center'>
            <CardContent className='flex gap-2 items-center'>
              <div className='rounded-full border-2 p-1'>
                <Plus className="text-gray-400" />
              </div>
              <CardDescription className='font-semibold'>
                Upgrade Plan
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className='lg:col-span-1'>
          <Section label="Billing Setting"
            message="Add payment information, upgrade and modify your plan." />
        </div>
      </div>

  )
}

export default BillingSettingPage