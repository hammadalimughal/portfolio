import { Col, Row } from 'antd'
import React from 'react'
import aquire from '../images/aquire-customer.jpg'
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const AquireCustomer = () => {
    return (
        <>
            <section className="aquire-customer">
                <div className="container">
                    <Row style={{
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }} gutter={30}>
                        <Col span={11}>
                            <h2 className="theme-h2">Acquire new customers thanks to the list of orders</h2>
                            <p className="theme-p">Share your work with clients and invite your employees to edit. Everyone can have their own account.</p>
                        </Col>
                        <Col span={12}>
                            <img className='aquire-img img-fluid' src={aquire} alt="" />
                        </Col>
                    </Row>
                    <div className='aquire-ul'>
                        <div className='aquire-item'>
                            <Row>
                                <Col span={10}>
                                    <h3 className="theme-h3">Design <br /> Immplementation</h3>
                                </Col>
                                <Col span={2}>
                                    <span className="number">01</span>
                                </Col>
                                <Col span={12}>
                                    <p>The implementation of projects from your graphics program is simple and quick. Our clients create advanced design system.</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='aquire-item'>
                            <Row>
                                <Col span={10}>
                                    <h3 className="theme-h3">Design from scratch</h3>
                                </Col>
                                <Col span={2}>
                                    <span className="number">02</span>
                                </Col>
                                <Col span={12}>
                                    <p>We create projects created from scratch, tailored to customer expectations and adapted to all mobile devices with adaptation to the good feeling of use.</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <Row style={{justifyContent: 'flex-end'}}>
                        <Col span={12}>
                            <p className="theme-p">Check out our previous projects available in Portfolio and see for yourself the possibilities and advantages.</p>
                            <Link className='contact-aquire' to="/contact"><span>Contact now</span> <RightOutlined /> </Link>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default AquireCustomer
