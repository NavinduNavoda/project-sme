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
          {(activeSegment == "app") && <Appointments adminToken = {props.adminToken}/>}
          {(activeSegment == "ser") && <Services adminToken = {props.adminToken}/>}
          {(activeSegment == "boo") && <Books adminToken = {props.adminToken}/>}
          {(activeSegment == "cli") && <Clients adminToken = {props.adminToken}/>}
          {(activeSegment == "das") && <Dashboard adminToken = {props.adminToken}/>}
          {(activeSegment == "set") && <Settings adminToken = {props.adminToken}/>}
        </div>

    </div>
  )
}

export default Pannel