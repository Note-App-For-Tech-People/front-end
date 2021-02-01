import React from 'react'

const IntoAccountHeader = ({ title, img }) => {
    return (
        <div>
            <img src={img} alt={title} />
            <h3>{ title }</h3>
        </div>
    )
}

export default IntoAccountHeader;