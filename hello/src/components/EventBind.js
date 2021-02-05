import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }
    
    // clickHandler(){
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({
            message: 'Good BYE'
        })
    }

    // THIS keyword is undefined in event handler

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind

// event binding
// 1. bind(this)
// 2. arrow function
// 3. binding in constructor 
// 4. define function as arrow function

// 3 or 4