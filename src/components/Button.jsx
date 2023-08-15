import React from 'react'


const Button = ({styles, children}) => {
  return (
    <button className={`py-4 px-6 ${styles} bg-blue-gradient rounded-lg text-[18px] font-poppins text-primary outline-none font-medium`}>
      {children}
    </button>
  )
}

export default Button