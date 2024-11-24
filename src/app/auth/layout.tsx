import { currentUser } from '@clerk/nextjs';
import React from 'react'

type Props = {
    children: React.ReactNode; 
}
const layout = async (props: Props ) => {
    const user = await currentUser();
    if(user) 
  return (
    <div>layout</div>
  )
}

export default layout