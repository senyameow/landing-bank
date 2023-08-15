import React from 'react'
import styles from '../style'
import { quotes } from '../assets'

const Feedback = ({id, content, name, title, img}) => {
  return (
    <div key={id} className={`${styles.flexStart} flex-col w-[330px] h-[350px] p-10 justify-between feedback-card rounded-[20px] mt-5`}>
      <img src={quotes} alt="" />
      <p className={`${styles.paragraph} text-white my-10`}>{content}</p>
      <div className={`${styles.flexCenter} flex-row`}>
        <img src={img} alt="" className='w-[48px] h-[48px] mr-5' />
        <div>
          <h4 className='text-white'>{name}</h4>
          <p className={`${styles.paragraph} text-[13px]`}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback