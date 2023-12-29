"use client"

import Nav from './features/nav'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Appointments from './features/appointments'
import Services from './features/services'
import Books from './features/books'
import Clients from './features/clients'
import Dashboard from './features/dashboard'
import Settings from './features/settings'

const Pannel = (props: any) => {

  const [activeSegment, setActiveSegment] = useState("app");

  return (
    <div>

        <div className='flex'>
          <Nav setActive = {setActiveSegment} active={activeSegment}/>
          {(activeSegment == "app") && <Appointments/>}
          {(activeSegment == "ser") && <Services adminToken = {props.adminToken}/>}
          {(activeSegment == "boo") && <Books/>}
          {(activeSegment == "cli") && <Clients/>}
          {(activeSegment == "das") && <Dashboard/>}
          {(activeSegment == "set") && <Settings/>}
        </div>

    </div>
  )
}

export default Pannel