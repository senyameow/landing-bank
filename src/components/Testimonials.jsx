import React from 'react'
import styles, { layout } from '../style'
import Feedback from './Feedback'
import { feedback } from '../constants'



const Testimonials = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col relative align-center justify-center z-[5]`}>
      <div className={`absolute z-[1] -right-1/2 w-[64%] h-[100%] blue__gradient rounded-full`}/>
      <div className={`absolute z-[2] -right-1/2 bottom-0 w-[64%] h-[100%] pink__gradient rounded-full opacity-[.4]`}/>
      <div />
      <div className={`${styles.flexCenter} sm:flex-row text-center sm:text-left flex-col`}>
        <h2 className={`${styles.heading2} flex-1`}>What people are<br />saying about us</h2>
        <p className={`${styles.paragraph} flex-1 my-10`}> Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      
      <div className={`flex flex-wrap sm:justify-around w-full flex-row my-10 relative z-[1] justify-center`}>
        {feedback.map(feed => (
          <Feedback {...feed} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials