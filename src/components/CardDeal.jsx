import React from 'react'

import styles from '../style'
import { layout } from '../style'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[540px] mt-[24px] mb-[48px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button>Get Started</Button>
      </div>

      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className={`w-[100%] h-[100%]`}/>
      </div>
    </section>
  )
}

export default CardDeal