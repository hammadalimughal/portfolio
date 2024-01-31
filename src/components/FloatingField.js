import React from 'react'

const FloatingField = ({ placeholder, formData, setFormData, name }) => {
    return (
        <>
            <div className="floating-field">
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={(e) => {
                        setFormData({ ...formData, [name]: e.target.value })
                    }}
                    value={formData[name]}
                    required=""
                />
                <label>{placeholder}</label>
            </div>
        </>
    )
}

export default FloatingField
