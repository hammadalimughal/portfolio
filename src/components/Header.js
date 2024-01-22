import React from 'react'
import { NavLink } from 'react-router-dom'
import { LinkedinFilled, InstagramFilled, GithubFilled } from '@ant-design/icons'

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
            title: 'Our Policy',
            path: '/policy'
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
                                            className={({ isActive, isPending, isTransitioning }) => [
                                                //   isPending ? "pending" : "",
                                                isActive ? "active" : "",
                                                //   isTransitioning ? "transitioning" : "",
                                            ].join(" ")
                                            }
                                        >
                                            {page.title}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className="social-links">
                            <li>
                                <a href="/">
                                    <GithubFilled />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <LinkedinFilled />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <InstagramFilled />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
