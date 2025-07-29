'use client';
import Section from '@/components/section-label'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { useHelpDesk } from '@/hooks/settings/use-settings'
import React from 'react'
import FormGenerator from '../form-generator';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/loader';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

type Props = {
    id: string
}

const HelpDesk = ({ id }: Props) => {
    const { register,
        errors,
        onSubmitQuestion,
        loading,
        isQuestion,
        onGetQuestions } = useHelpDesk(id);

    return (
        <Card className="w-full grid grid-cols-1 lg:grid-cols-2">
            <CardContent className='p-6 border-r-[1px]'>
                <CardTitle>Help Desk</CardTitle>
                <form onSubmit={onSubmitQuestion} className='flex flex-col gap-6 mt-10'>
                    <div className='flex flex-col gap-3'>
                        <Section
                            label="Question"
                            message="Add a question that you believe is frequently asked"
                        />
                        <FormGenerator
                            inputType='input'
                            register={register}
                            errors={errors}
                            name="question"
                            form='help-desk-form'
                            type='text'
                            placeholder='Type your question0'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Section
                            label="Answer to question"
                            message="Add an answer to the question"
                        />
                        <FormGenerator
                            inputType='textarea'
                            register={register}
                            errors={errors}
                            name='answer'
                            form='help-desk-form'
                            type='text'
                            placeholder='Type your answer'
                        />
                    </div>
                    <Button
                        type="submit"
                        className='bg-primary hover:opacity-70 transition duration-150 ease-in-out text-white font-semibold'
                    >
                        Create
                    </Button>
                </form>
            </CardContent>
            <CardContent className='p-6 overflow-y-auto chat-window'>
                <CardTitle>Questions</CardTitle>
                <Loader loading={loading}>
                    <div className='mt-10 flex flex-col gap-6'>
                        {isQuestion.length ?
                            <Accordion type="single" collapsible>
                                {isQuestion.map((question) => (
                                    <AccordionItem key={question.id} value={question.id}>
                                        <AccordionTrigger>{question.question}</AccordionTrigger>
                                        <AccordionContent>{question.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            : (<CardDescription>No Question to Shows!</CardDescription>)   
                    }
                    </div>
                </Loader>
            </CardContent>
        </Card>
    )
}

export default HelpDesk
