import React from 'react'
import styles from '../style'
import { layout } from '../style'
import { apple, bill, google } from '../assets'


const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} className={`w-[100%] h-[100%] relative z-[5]`}/>
        <div className={`absolute w-[100%] h-[60%] -left-1/2 white__gradient z-[2]`}/>
        <div className={`absolute w-[70%] h-[50%] -left-1/2 bottom-0 pink__gradient z-[3]`}/>
      </div>

      <div className={`${layout.sectionInfo} ml-5`}>
        <h2 className={`${styles.heading2}`}>
        Easily control your <br />
        billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

        <div className={`flex flex-row sm:mt-10 mt-6 gap-10`}>
          <button><img src={apple} alt="" /></button>
          <button><img src={google} alt="" /></button>
        </div>
      </div>
    </section>
  )
}

export default Billing