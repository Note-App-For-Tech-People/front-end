import React from 'react'

const IntoAccountSubBox = ({ leftText, rightText }) => {
    return (
        <div className="box">
            <span>{ leftText }</span>
            <a>{ rightText }</a>
        </div>
    )
}

export default IntoAccountSubBox;