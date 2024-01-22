import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import { LineOutlined, RightOutlined } from '@ant-design/icons'

const CreatingPortfolio = () => {
    return (
        <>
            <section className='creating-portfolio'>
                <div className="container-stretch">
                    <Link className="content-wrapper">
                        <Link className='hover-link'>Start with Solution <LineOutlined /></Link>
                        <Row style={{
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Col span={10}>
                                <h2 className="theme-h2">Creating your ideal portfolio website.</h2>
                            </Col>
                            <Col span={3}>
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
