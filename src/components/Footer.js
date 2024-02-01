import { Col, Row, message } from 'antd'
import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RightOutlined, SendOutlined, LoadingOutlined } from '@ant-design/icons'
import { UserInfoContext } from '../context/UserInfo'
import SocialLinks from './SocialLinks'

const Footer = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: ''
    })
    const { userInfo } = useContext(UserInfoContext)
    useEffect(() => {
        setFormData({
            ...formData,
            ipAddress: userInfo?.ipAddress,
            city: userInfo?.city,
            country: userInfo?.country,
            region: userInfo?.region,
            organization: userInfo?.organization,
            postal: userInfo?.postal,
            timeZone: userInfo?.timeZone,
            location: userInfo?.location
        })
    }, [userInfo])
    const [messageApi, contextHolder] = message.useMessage();
    const handleSubmit = async (e) => {
        e.preventDefault()
        messageApi.open({
            key: 'newsletter-submitting',
            type: 'loading',
            content: 'Submitting...',
        });
        const formRes = await fetch('https://formspree.io/f/xpzvqgvo', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        const formJson = await formRes.json()
        if (formJson.error) {
            messageApi.open({
                key: 'newsletter-submitting',
                type: 'error',
                content: formJson.error,
            });
        } else {
            messageApi.open({
                key: 'newsletter-submitting',
                type: 'success',
                content: 'Submitted!',
                duration: 2,
            });
        }
        setLoading(false)
    }
    return (
        <>
            {contextHolder}
            <footer>
                <div className="footer-main">
                    <div className="container">
                        <Row style={{
                            justifyContent: 'space-between'
                        }}>
                            <Col xl={8}>
                                <div className="footr-lft">
                                <h3 className='theme-h3'>A Creative Mind with Innovative Solutions for crafting Unique Websites/Apps.</h3>
                                <p className="theme-p">A creative agency that creates new solutions for websites thanks to the new system.</p>
                                <Link className='contact-aquire' to="/contact"><span>Contact now</span> <RightOutlined /> </Link>
                                </div>
                            </Col>
                            <Col xl={4} md={12} xs={24}>
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
                                </ul>
                            </Col>
                            <Col xl={5} md={12} xs={24}>
                                <h5 className="theme-h5">Contact now</h5>
                                <ul className='contact-info'>
                                    <li>
                                        <form onSubmit={handleSubmit}>
                                            <div className="newsletter-field">
                                                <input
                                                    type="email"
                                                    placeholder='info@domain.com'
                                                    value={formData.email}
                                                    required
                                                    onChange={(e) => {
                                                        setFormData({
                                                            ...formData,
                                                            email: e.target.value
                                                        })
                                                    }}
                                                />
                                                <button type='submit'>
                                                    {loading ? <LoadingOutlined /> : <SendOutlined />}

                                                </button>
                                            </div>
                                        </form>
                                    </li>
                                    <li>
                                        {/* <strong>Circle Solutions</strong> */}
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
