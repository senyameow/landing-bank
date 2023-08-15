import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] bg-discount-gradient mb-2`}>
          <img src={discount} alt="discount" className='w-[32px] h-[32px] mr-[13px]' />
          <p className={`${styles.paragraph}`}>
            <span className='text-white'>20%</span> Discount for {" "}
            <span className='text-white'>1 month</span> Account {" "}
          </p>
        </div>

        <div className={`flex flex-row justify-between items-center w-full`}>
          <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[125px] leading-[70px]' >
            The Next <br className='sm:block hidden'/>{' '}
            <span className='text-gradient'>Generation</span><br />
            
          </h1>
          <div className={`ss:flex hidden md:mr-4 mr-0 self-start`}>
            <GetStarted />
          </div>
        </div>

        <h1 className={'font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[125px] leading-[70px]'}>
          Payment method
        </h1>
        <p className={`${styles.paragraph} w-[483px] mt-10`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.
        </p>

        

      </div> {/* левая часть секции - конец */}

      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}> {/* правая часть секции (картинка с градиентами) - начало !!! также надо не забыть на див правой части накинуть релатив и flex-1 иначе будет скролл и другие неприятности + подстайлить для моб. версии*/}
        <img src={robot} alt="robot picture" className={`w-[100%] h-[100%] relative z-[5]`} />
        {/* градиенты можно дать так: картинка relative z побольше, и создаем кучу absolute дивов с меньшим z, которые просто стайлим под дизайн */}
        <div className={`absolute w-[40%] h-[60%] top-0 pink__gradient z-[0]`} />
        <div className={`absolute w-[35%] h-[80%] bottom-40 white__gradient z-[1] rounded-full`} />
        <div className={`absolute w-[60%] h-[80%] bottom-28 blue__gradient z-[2] rounded-full opacity-[.9]`} />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>


    </section>  
  )
}

export default Hero