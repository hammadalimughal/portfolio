import { Col, Row } from 'antd'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import SocialLinks from './SocialLinks'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-main">
                    <div className="container">
                        <Row style={{
                            justifyContent: 'space-between'
                        }}>
                            <Col span={8}>
                                <h3 className='theme-h3'>A modern agency with new solutions to creating website.</h3>
                                <p className="theme-p">A creative agency that creates new solutions for websites thanks to the new system.</p>
                                <Link className='contact-aquire' to="/contact"><span>Contact now</span> <RightOutlined /> </Link>
                            </Col>
                            <Col span={4}>
                                <h5 className="theme-h5">Menu</h5>
                                <ul className="footer-links">
                                    <li>
                                        <NavLink to='/'>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/about'>About us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/portfolio'>All Portfolio</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/contact'>Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/privacy'>Privacy Policy</NavLink>
                                    </li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <h5 className="theme-h5">Contact now</h5>
                                <ul className='contact-info'>
                                    <li>
                                        <strong>Circle Solutions</strong>
                                        <Link className='hover-link' to="/contact">Ready to Start <br /> Your Project?</Link>
                                    </li>
                                    <li>
                                        <a className='hover-link' href="mailto:hammad19ali@gmail.com">hammad19ali@gmail.com</a>
                                        <a className='hover-link' href="tel:+92 311 200 1477">+92 311 200 1477</a>
                                    </li>
                                </ul>
                                <SocialLinks />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-copyright">
                        <p className="theme-p">&copy; Copyright 2024 | HAMMAD ALI.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
