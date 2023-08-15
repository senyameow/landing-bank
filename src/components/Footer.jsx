import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'


const Footer = () => {
  return (
    <footer className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start self-center'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] mb-5 md:self-start self-center' />
          <p className={`${styles.paragraph}`}>A new way to make the payments <br className='md:block hidden'/> easy, reliable and secure.</p>
        </div>

        <div className={`flex-[1.5] flex flex-row justify-between w-full mt-10`}>
          {footerLinks.map(link => (
            <div key={link.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='text-white mb-3'>{link.title}</h4>
              <ul>
                {link.links.map(link => (
                  <li>
                    <a className={`${styles.paragraph} text-[14px] my-1 hover:text-secondary`} href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className={`flex md:flex-row flex-col pt-5 w-full justify-between border-t gap-5`}>
        <p className={`${styles.paragraph}`}>Copyright &copy; 2023 HooBank. All Rights Reserved.</p>
        <ul className='flex flex-row gap-5'>
          {socialMedia.map(social => (
            <a href={social.link}><img src={social.icon} className='h-[21px]' /></a>
          ))}
        </ul>
      </div>

    </footer>
  )
}

export default Footer