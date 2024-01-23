import React from 'react'

const FloatingField = ({placeholder}) => {
    return (
        <>
            <div class="floating-field">
                <input type="text" placeholder={placeholder} required="" />
                <label>{placeholder}</label>
            </div>
        </>
    )
}

export default FloatingField
