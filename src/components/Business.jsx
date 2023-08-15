import React from 'react'
import { features } from '../constants'
import styles from '../style'
import { layout } from '../style'
import Button from './Button'

const FeatureCard = ({id, icon, title, content, key, index}) => (
  <div key={key} className={`flex flew-row p-6 rounded-[20px] feature-card`}>
    <div className={`${styles.flexCenter}`}>
      <div className={`relative w-[64px] h-[64px] rounded-full bg-black-gradient ${styles.flexCenter}`} />
      <img className='absolute w-[38px] h-[38px]' src={icon} />
    </div>
    <div className={`${styles.flexStart} flex-col gap-2 pl-5`}>
      <h3 className='text-white font-poppins font-semibold text-[18px]'>{title}</h3>
      <p className={`${styles.paragraph} max-w-[400px]`}>{content}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={`${layout.section} ${styles.flexCenter}`} >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business,<br className='sm:block hidden'/>
           we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles={'mt-10'}>Get Started</Button>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, ind) => (
          <FeatureCard key={feature.id} {...feature} index={ind} />
          // лучше вынесем логику в отдельный компонент
        ))}
      </div>

    </section>
  )
}

export default Business