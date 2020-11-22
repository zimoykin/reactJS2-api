import React from 'react'
import DeviceDetect from '../../utils/detectDevice'

export const ADDRESS = "http://10.0.0.102:8000" 
export const TIMEOUT = 1000
export const isMobile = DeviceDetect()


export const MENUS = [
    { title: 'Home', href: '/home' },
    { title: 'New post', href: '/newpost' },
    { title: 'Country', href: '/country' },
    { title: 'Place', href: '/place' },
    { title: 'Contacts', href: '/contacts' }
  ]
