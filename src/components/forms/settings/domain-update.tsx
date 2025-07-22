import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import FormGenerator from '../form-generator'

type DomainProps = {
    name: string
    register: UseFormRegister<FieldValues>
    errors: FieldErrors<FieldValues>
}

const DomainUpdate = ({ name, register, errors }: DomainProps) => {
    return (
        <div className='flex gap-2 pt-5 items-end w-[400px]'>
            <FormGenerator
                label='Domain Name'
                register={register}
                name='domain'
                errors={errors}
                type="text"
                inputType='input'
                placeholder={name}
            />
        </div>
    )
}

export default DomainUpdate