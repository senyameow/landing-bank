import React from 'react'
import { stats } from '../constants'
import styles from '../style'
import Borders from './Borders'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} md:flex-row flex-col sm:mb-20 mb-6 justify-center`}>
      {stats.map(stat => (
        <div key={stat.id} className={`${styles.flexCenter} w-full flex-1 ${stat.id === 'stats-2' && 'relative'}`}>
          <h1 className='md:flex-none flex-1 font-poppins font-semibold ss:text-[50px] text-[40px] text-white md:text-left text-center self-center'>{stat.value}</h1>
          <span className={`md:flex-none flex-1 text-gradient text-[23px] ml-10 md:text-left text-center self-center`}>{stat.title}</span>
          {stat.id === 'stats-2' && <Borders />}
        </div>
      ))}
    </section>
  )
}

export default Stats