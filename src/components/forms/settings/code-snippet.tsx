'use client'; 
import Section from '@/components/section-label'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

type Props = {
    id:string
}

const CodeSnippet = ({id}: Props) => {
    const [copied, setCopied] = useState(false)
    
    let snippet = `
        const iframe = document.createElement("iframe"); 

        const iframeStyles = (stylesString) => {
            const style = document.createElement("style");
            style.textContent = stylesString;
            document.head.appendChild(style);
        }

        iframeStyles('
        .chat-frame{
            position: fixed; 
            bottom: 50px; 
            right: 50px; 
            border: none; 
        }
    ')
    iframe.src = "http://localhost:3000/chatbot" 
    iframe.classList.add('chat-frame') 
    document.body.appendChild(iframe) 

    window.addEventListener("message",(e) => {
        if(e.origin !== "http://localhost:3000/") return null 
        let dimensions = JSON.parse(e.data) 
        iframe.width = dimensions.width 
        iframe.height = dimensions.height
        iframe.contentWindow.postMessage("${id}","http://localhost:3000/") 
    })
    `

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(snippet)
            toast.success('Copied!')
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

  return (
   <div className='mt-10 flex flex-col gap-5 items-start'>
    <Section label="Code snippet"
    message="Copy and paste this code snippet to your website in Header tag to embed the chatbot"
    />
    <div className='flex flex-col gap-2 w-full'>
        <div className='flex items-center justify-between'>
            <p className='text-sm font-semibold'>JavaScript</p>
            <Button 
                onClick={handleCopy}
                variant="outline" 
                size="sm"
                className='flex items-center gap-2 cursor-pointer'
            >
                {copied ? <Check className='h-4 w-4' /> : <Copy className='h-4 w-4' />}
                {copied ? 'Copied!' : 'Copy'}
            </Button>
        </div>
        <div className='relative'>
            <pre className='bg-gray-900 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm text-green-500'>
                <code>{snippet}</code>
            </pre>
        </div>
    </div>
   </div>
  )
}

export default CodeSnippet
