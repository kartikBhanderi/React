import React from 'react'
import ReactDOM from 'react-dom'

function Temp() {
    return ReactDOM.createPortal(
        <h1>
            Hello Kartik
        </h1>,
        document.getElementById('my-portal')
    )
}

export default Temp
