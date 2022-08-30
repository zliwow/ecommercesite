import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className='navbar-contrainer'>
      <p className='logo'>
        <Link href='/'>Andrew's Collections</Link>
      </p>
      <button type='button' className='cart-icon' onClick=''>
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default NavBar