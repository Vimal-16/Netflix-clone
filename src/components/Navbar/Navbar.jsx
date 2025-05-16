import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/Logonetflix.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import profile_icon from '../../assets/Netflix-avatar.png'
import caret_icon from '../../assets/arrow-down.png'
import { logout } from '../../firebase'
const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" width="100rem" />
            <ul>
                <li>Home</li>
                <li>Tv shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My list</li>
                <li>Browse by languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search} alt="" width="30rem" className='icons' />
            <p>Children</p>
            <img src={bell} alt=""  width="30rem"className='icons' />
            <div className='navbar-profile'>
            <img src={profile_icon} alt="" width="30rem" className='profile' />
            <img src={caret_icon} alt="" width="30rem" />
            <div className="dropdown">
                 <p onClick={()=>{logout()}}>Sign out of netflix</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar