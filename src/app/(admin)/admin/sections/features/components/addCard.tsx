import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { VscDiffAdded } from "react-icons/vsc";

const AddCard = (props: any) => {
  return (
    <div>
        <Card onClick={props.trigger} className='cursor-pointer hover:shadow-sm w-[250px] h-[320px] flex items-center justify-center shadow-md'>
            <CardContent className='flex items-center justify-center'>
                <VscDiffAdded className="w-[48px] h-[48px] text-black opacity-[.8]"/>
            </CardContent>
        </Card>
    </div>
  )
}

export default AddCard