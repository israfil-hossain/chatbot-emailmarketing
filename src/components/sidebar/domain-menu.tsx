import React from 'react'

type Props = {
    min?:boolean,
    domains: 
        |{
            id:string 
            name: string 
            icon: string | null 
        }[]
        | null 
        | undefined 
}

const DomainMenu = (props: Props) => {
  return (
    <div>DomainMenu</div>
  )
}

export default DomainMenu