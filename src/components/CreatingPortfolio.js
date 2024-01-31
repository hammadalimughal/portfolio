import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import { LineOutlined, RightOutlined } from '@ant-design/icons'

const CreatingPortfolio = () => {
    return (
        <>
            <section className='creating-portfolio'>
                <div className="container-stretch">
                    <Link className="content-wrapper" to='/contact'>
                        <Link className='hover-link'>Start with Me <LineOutlined /></Link>
                        <Row style={{
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Col md={10} xs={24}>
                                <h2 className="theme-h2">Create your ideal Modern website.</h2>
                            </Col>
                            <Col md={3} xs={24}>
                                <span className="icon"><RightOutlined /></span>
                            </Col>
                        </Row>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default CreatingPortfolio
