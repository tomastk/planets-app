import React, { useState } from 'react'
import Bars from '../Bars'
import Logo from '../Logo'
import Navbar from '../Navbar'
import './index.css'

const Header = ({updateMenu, showed}) => {
  

  return (
    <div className="header">
      <Logo />
      <Navbar showed={showed}/>
      <Bars handleClick={updateMenu}/>
    </div>
  )
}

export default Header