import React from 'react'
import Container from '../global/container'

type Props = {
    title: string,
    subtitle: string,
    content: string
}

const TitleCard = ({ title, subtitle, content }: Props) => {
    return (
        <Container delay={0.2} className='flex flex-col justify-center items-center'>
            <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-6xl">
                <span className="font-title italic">{title}</span> <br />
                <span className="font-uncut font-medium tracking-tighter">
                    {subtitle}
                </span>
            </h1>
            <p className='text-center  text-balance'>
                {content}
            </p>
        </Container>
    )
}

export default TitleCard