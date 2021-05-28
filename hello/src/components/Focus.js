import React, { Component } from 'react'
import Input from './Input'

class Focus extends Component {

    constructor(props) {
        super(props)
        this.currRef = React.createRef()
    }

    clickHandler = () => {
        if(this.currRef) {
            this.currRef.current.focus()    
        }
        else console.log("Oh no")
    }

    render() {
        return (
            <div>
                <Input ref={this.currRef}/>
                <button onClick={this.clickHandler} > Focus Input</button>
            </div>
        )
    }
}

export default Focus
