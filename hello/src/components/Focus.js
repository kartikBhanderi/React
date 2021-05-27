import React, { Component } from 'react'
import Input from './Input'

class Focus extends Component {

    constructor(props) {
        super(props)
    
        this.currRef = React.createRef()
    }
    
    // focusInput() {
    //     console.log('HI')
    // }

    clickHandler = () => {
        console.log(this.currRef)
        this.currRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input></Input>
                <button ref={this.currRef} onClick={this.clickHandler} > Focus Input</button>
            </div>
        )
    }
}

export default Focus
