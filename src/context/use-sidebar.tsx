'use client'; 

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useChatContext } from "./user-chat-context";
import toast from "react-hot-toast";
import { onGetConversationMode, onToggleRealtime } from "@/actions/conversation";
import { useClerk } from "@clerk/nextjs";

const useSideBar = () => {
    const [expand, setExpand] = useState<boolean | undefined>(undefined);
    const router = useRouter();
    const pathname = usePathname()
    const [realtime, setRealtime] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const { chatRoom } = useChatContext(); 

    const onActivateRealtime = async (e:any) => {
        try{
            const realtime = await onToggleRealtime(
                chatRoom!, 
                e.target.ariaChecked == 'true' ? false : true
            )
            if(realtime){
                setRealtime(realtime.chatRoom.live)
                toast.success(realtime.message); 
            }
        }
        catch(err){
            console.log(err); 
        }
    }

    const onGetCurrentMode = async () => {
        setLoading(true)
        const mode = await onGetConversationMode(chatRoom!)
        if(mode){
            setRealtime(mode.live) 
            setLoading(false) 
        }
    }

    useEffect(() => {
        if(chatRoom){
            onGetCurrentMode() 
        }
    },[chatRoom])

    const page = pathname.split('/').pop(); 
    const { signOut } = useClerk(); 

    const onSignOut = () => signOut(() => router.push('/')) 

    const onExpand = () => setExpand((prev) => !prev) 

    return {
        expand, 
        onExpand, 
        page, 
        onSignOut, 
        realtime, 
        onActivateRealtime, 
        chatRoom, 
        loading
    }
};

export default useSideBar; 