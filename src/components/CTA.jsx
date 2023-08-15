import React from 'react'
import styles from '../style'
import Button from './Button'


const CTA = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} text-center`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col ${styles.paddingX} ${styles.paddingY} feedback-card rounded-[20px] justify-around`}>
        <div className={`${styles.flexStart} flex-col text-center`}>
          <h1 className={`${styles.heading2}`}>Let’s try our service now!</h1>
          <p className={`${styles.paragraph} md:max-w-[445px] w-full mt-5`}>Everything you need to accept card payments <br /> and grow your business anywhere on the planet.</p>
        </div>
        <Button styles={'mt-10'}>Get Started</Button>
      </div>
    </section>
  )
}

export default CTA