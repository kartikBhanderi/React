import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)
    
        this.currRef = React.createRef()
    }
    

    focusInput = () => {
        this.currRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.currRef}></input>
            </div>
        )
    } 
}

export default Input
