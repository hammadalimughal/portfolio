import React from 'react'
import { LinkedinFilled, InstagramFilled, GithubFilled } from '@ant-design/icons'

const SocialLinks = () => {
    return (
        <ul className="social-links">
            <li>
                <a href="https://github.com/hammadalimughal/" target='_blank'>
                    <GithubFilled />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/hammadali-mughal/" target='_blank'>
                    <LinkedinFilled />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/hammadali_mughal/" target='_blank'>
                    <InstagramFilled />
                </a>
            </li>
        </ul>
    )
}

export default SocialLinks
