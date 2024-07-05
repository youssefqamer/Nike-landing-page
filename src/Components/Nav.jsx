import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../Constants/index'
import { useState } from 'react'
const Nav = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
    <header className='padding-x py-8 absolute w-full z-50'>
        <nav className='flex justify-between items-center  max-container'>
            <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>
            <ul className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((link,index)=>{
                return  <li key={index} >
                    <a href={link.href} className='font-montserrat leading-normal text-lg 
                    text-slate-gray'>
                        {link.label}
                    </a>
                  </li>
                
              })}
            </ul>
            <div>
                <img src={hamburger} alt="" width={25} height={25} className='hidden max-lg:block cursor-pointer' onClick={()=>setClicked(!clicked)}/>
            </div>
        </nav>
       {clicked?<ul className=' min-w-full bg-white shadow-xl  max-lg:flex max-lg:flex-col   hidden p-3 rounded-md'>
       {navLinks.map((link,index)=>{
                return  <li key={index} className='pb-10 '>
                    <a href={link.href} className='font-montserrat leading-normal text-lg 
                    text-slate-gray' onClick={()=>setClicked(!clicked)}>
                        {link.label}
                    </a>
                  </li>
                
              })}
                </ul>:''}
    </header>
    </>
  )
}

export default Nav