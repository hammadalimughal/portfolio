import React from 'react'
import { NavLink } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const Header = () => {
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
                <div className="container">
                    <nav>
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
            </header>
        </>
    )
}

export default Header
