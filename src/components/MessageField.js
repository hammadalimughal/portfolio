import React from 'react'

const MessageField = ({placeholder}) => {
    return (
        <>
            <div class="message-field floating-field">
                <textarea placeholder={placeholder} required="" />
                <label>{placeholder}</label>
            </div>
        </>
    )
}

export default MessageField
