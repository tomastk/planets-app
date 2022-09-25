import React, { useState } from 'react'
import Bars from '../Bars'
import Logo from '../Logo'
import Navbar from '../Navbar'
import './index.css'

const Header = () => {
  const [showed, setShowed] = useState(false)

  const handleMenu = () => {
    setShowed(!showed)
  }
  return (
    <div className="header">
      <Logo />
      <Navbar showed={showed}/>
      <Bars handleClick={handleMenu}/>
    </div>
  )
}

export default Header