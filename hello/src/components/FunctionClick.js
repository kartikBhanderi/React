import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Button clicked')
    }

    return (
        <div>
            <button onClick={clickHandler}>  
            {/* we need handler to be function rather than function call */}
                Click
            </button>
        </div>
    )
}

export default FunctionClick
