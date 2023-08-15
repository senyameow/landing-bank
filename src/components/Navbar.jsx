import React from 'react'
import { useState } from 'react'
import {close, logo, menu} from '../assets'
import { navLinks } from '../constants'
import styles from '../style'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between navbar items-center'>
        <img src={logo} alt="logo" className='w-[124px] h-[32px]'/>
        <ul className='flex w-[50%] justify-between items-center list-none sm:flex hidden'>
            {navLinks.map(link => (
                <li key={link.id} className={`font-poppins cursor-pointer`}><a href={`#${link.id}`} className='text-white hover:text-secondary'>{link.title}</a></li>
            ))}
        </ul>
        
        <div className='sm:hidden jusify-end items-center'>
            <img src={toggle ? close : menu} className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(prev => !prev)}/>
            <div className={`${toggle ? `flex` : `hidden`} p-6 bg-black-gradient absolute top-20 right-6 rounded-xl min-w-[140px] sidebar`}>
                <ul className='flex w-full justify-between items-center list-none sm:flex flex-col gap-2'>
                    {navLinks.map(link => (
                <li key={link.id} className={`font-poppins cursor-pointer`}><a href={`#${link.id}`} className='text-white'>{link.title}</a></li>
                    ))}
                </ul>
            </div>
        </div>

    </nav>
  )
}

export default Navbar