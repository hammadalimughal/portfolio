import React from 'react'

const MessageField = ({ placeholder, formData, setFormData, name }) => {
    return (
        <>
            <div className="message-field floating-field">
                <textarea
                    placeholder={placeholder}
                    onChange={(e) => {
                        setFormData({ ...formData, [name]: e.target.value })
                    }}
                    value={formData[name]}
                    required="" />
                <label>{placeholder}</label>
            </div>
        </>
    )
}

export default MessageField
