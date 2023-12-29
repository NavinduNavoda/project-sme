import React from 'react'
import { Button } from '@/components/ui/button'
import { IoMdRefresh } from "react-icons/io";

const RefreshButton = (props: any) => {
  return (
    <div>
        <Button variant="ghost" onClick={props.onClick}><IoMdRefresh className = "w-[24px] h-[24px]"/></Button>
    </div>
  )
}

export default RefreshButton