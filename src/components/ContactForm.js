import React, { useEffect, useState, useContext } from 'react'
import { Col, Row, message } from 'antd'
import contactImg from '../images/contact.jpg'
import FloatingField from './FloatingField'
import MessageField from './MessageField'
import { RightOutlined, LoadingOutlined } from '@ant-design/icons'
import { UserInfoContext } from '../context/UserInfo'

const ContactForm = () => {
    const { userInfo } = useContext(UserInfoContext)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
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
        setLoading(true)
        messageApi.open({
            key: 'form-submitting',
            type: 'loading',
            content: 'Submitting...',
        });
        const formRes = await fetch('https://formspree.io/f/xeqyebyz', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        const formJson = await formRes.json()
        // setTimeout(() => {
        if (formJson.error) {
            messageApi.open({
                key: 'form-submitting',
                type: 'error',
                content: formJson.error,
            });
        } else {
            messageApi.open({
                key: 'form-submitting',
                type: 'success',
                content: 'Submitted!',
                duration: 2,
            });
            setFormData({
                ...formData,
                name: '',
                email: '',
                phone: '',
                message: '',
            })
        }
        setLoading(false)
        // }, 1000);
    }
    return (
        <>
            {contextHolder}
            <section className='contact-form'>
                <div className="container">
                    <Row gutter={{ lg: 100, xs: 0 }}>
                        <Col className='border-right' lg={11} xs={24}>
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
                        <Col lg={13} xs={24}>
                            <div className="padding-y">
                                <h2 className="theme-h2">Contact Form</h2>
                                <p className="theme-p">Describe precisely the scope of work and cooperation with Ultravision — it will help understand your expectations and adjust the price list.</p>
                                <form onSubmit={handleSubmit} method="post">
                                    <FloatingField formData={formData} setFormData={setFormData} name="name" placeholder="Your Full Name *" />
                                    <FloatingField formData={formData} setFormData={setFormData} name="email" placeholder="Your Email *" />
                                    <FloatingField formData={formData} setFormData={setFormData} name="phone" placeholder="Your Phone *" />
                                    <MessageField formData={formData} setFormData={setFormData} name="message" placeholder="Your Message *" />
                                    <button className='contact-aquire' type='submit'><span>Send Message</span> {loading ? <LoadingOutlined /> : <RightOutlined />} </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ContactForm
