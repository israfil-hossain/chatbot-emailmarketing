'use client'
import { createContext, useContext, useState } from "react"

 
type ChatInitialValuesProps = {
    realtime: boolean 
    setRealtime: React.Dispatch<React.SetStateAction<boolean>> 
    chatRoom: string | undefined 
    setChatRoom: React.Dispatch<React.SetStateAction<string | undefined >> 
    chats: {
        message : string 
        id: string 
        role: 'assistant' | 'user' | null 
        createdAt: Date 
        seen : boolean 
    }[]
    setChats: React.Dispatch< 
        React.SetStateAction<{
            message: string 
            id: string 
            role: 'assistant' | 'user' | null 
            createdAt: Date 
            seen: boolean
        }[]
        >
    >
    loading : boolean 
    setLoading : React.Dispatch<React.SetStateAction<boolean>> 
}

// Types for Chat Value .. 
const ChatInitialValues : ChatInitialValuesProps = {
    realtime: false,
    setRealtime: () => undefined,
    chatRoom: undefined, 
    setChatRoom: () => undefined, 
    chats: [],
    setChats: () => undefined,
    loading: false,
    setLoading: () => undefined,
}

const chatContext = createContext(ChatInitialValues)
const { Provider } = chatContext; 

export const ChatProvider = ({children} : {children: React.ReactNode}) => {
    const [chats,setChats] = useState(ChatInitialValues.chats)
    const [loading,setLoading] = useState(ChatInitialValues.loading)
    const [chatRoom,setChatRoom] = useState(ChatInitialValues.chatRoom)
    const [realtime,setRealtime] = useState(ChatInitialValues.realtime)

    /**
     * An object containing the values provided by the chat context.
     * Add properties to this object to share state and functions across components
     * that consume the chat context.
     */
    const values = {
        chats, 
        setChats, 
        loading, 
        setLoading, 
        chatRoom, 
        setChatRoom, 
        realtime, 
        setRealtime
    }

    return <Provider value={values}>{children}</Provider>

}

export const useChatContext = () => {
    const state = useContext(chatContext)
    return state; 
}