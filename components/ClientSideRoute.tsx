'use client'

import Link from "next/link"

const ClientSideRoute = ({children,url}:{children:React.ReactNode,url:string}) => {
  return (
    <Link href={url}>{children}</Link>
  )
}

export default ClientSideRoute