import React from 'react'
import styles from '../style'
import { clients } from '../constants'


const Client = () => {
  return (
    <section className={`${styles.flexCenter} ss:flex-row flex-col flex-wrap`}>
      {clients.map(client => (
        <div className={`${styles.flexCenter} min-w-[170px] mx-10`}>
          <img src={client.logo} className='w-[170px] my-5'/>
        </div>
      ))}
    </section>
  )
}

export default Client