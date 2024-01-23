import { Col, Row } from 'antd'
import React from 'react'
import contactImg from '../images/contact-form.avif'
import FloatingField from './FloatingField'
import MessageField from './MessageField'
import { RightOutlined } from '@ant-design/icons'

const ContactForm = () => {
    return (
        <>
            <section className='contact-form'>
                <div className="container">
                    <Row gutter={100}>
                        <Col className='border-right' span={11}>
                            <div className="padding-y">
                                <div className="img-wrapper">
                                    <img className='img-fluid' src={contactImg} alt="" />
                                </div>
                                <h5 className="theme-h5">Agency Circle </h5>
                                <h2 className="theme-h2">We are waiting for your message</h2>
                                <h3 className="theme-h3">Create a dream project together</h3>
                                <p className="theme-p">All valuable questions and answers for everyone starting their adventure with investment in technologies.</p>
                            </div>
                        </Col>
                        <Col span={13}>
                            <div className="padding-y">
                                <h2 className="theme-h2">Contact Form</h2>
                                <p className="theme-p">Describe precisely the scope of work and cooperation with Ultravision — it will help understand your expectations and adjust the price list.</p>
                                <FloatingField placeholder="Your Full Name *"  />
                                <FloatingField placeholder="Your Email *"  />
                                <FloatingField placeholder="Your Phone *"  />
                                <MessageField placeholder="Your Message *"/>
                                <button className='contact-aquire' to="/contact" type='submit'><span>Send Message</span> <RightOutlined /> </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ContactForm
