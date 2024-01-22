import React from 'react'
import { LinkedinFilled, InstagramFilled, GithubFilled } from '@ant-design/icons'

const SocialLinks = () => {
    return (
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
    )
}

export default SocialLinks
