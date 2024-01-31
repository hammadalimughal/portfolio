import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import { MenuOutlined } from '@ant-design/icons'

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const location = useLocation()
    useEffect(()=>{
        setNavOpen(false)
    },[location.pathname])
    const pages = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About Us',
            path: '/about'
        },
        {
            title: 'Portfolio',
            path: '/portfolio'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ]
    return (
        <>
            <header>
            <div className={navOpen ? 'overlay-body show' : 'overlay-body'} onClick={() => {setNavOpen(false)}}></div>
                <div className="container">
                    <div className="header-wrapper">
                        <button className='menu-bar'onClick={()=>{
                            setNavOpen(!navOpen)
                        }}><MenuOutlined /></button>
                        <nav className={navOpen ? 'opened' : ''}>
                            <ul className='nav-links'>
                                {pages.map((page) => {
                                    return (
                                        <li>
                                            <NavLink
                                                to={page.path}
                                            // className={({ isActive, isPending, isTransitioning }) => [
                                            //     //   isPending ? "pending" : "",
                                            //     isActive ? "active" : "",
                                            //     //   isTransitioning ? "transitioning" : "",
                                            // ].join(" ")
                                            // }
                                            >
                                                {page.title}
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                            <SocialLinks />
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
