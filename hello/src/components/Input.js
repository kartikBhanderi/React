import React from 'react'


const Input = React.forwardRef((props, ref) => {
        return (
            <div>
                <input type="text" ref={ref}></input>
            </div>
        )
    }
)


export default Input
