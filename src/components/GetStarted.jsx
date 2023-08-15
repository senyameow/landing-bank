import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={` ${styles.flexCenter} w-[100%] h-[100%] rounded-full bg-primary`}>
        <p className='text-gradient text-[18px] font-poppins leading-[28px]'>
          <span>Get <img src={arrowUp} alt="arrow" className='inline-block w-[28px]' /></span>
           <br />
          <span>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted