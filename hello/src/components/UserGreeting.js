import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {

        return this.state.isLoggedIn && <div>Welcome kartik</div>

        // return (
        //     this.state.isLoggedIn ? 
        //     <div>Welcome kartik</div> :
        //     <div>Welcome guest</div>
        // )

        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Kartik</div>
        // }
        // else {
        //     message = <div>Welcome guest</div>
        // }
        // return message

        // if(this.state.isLoggedIn){
        //     return <div>Welcome Kartik !</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>Welcome Guest</div>
        //         <div>Welcome Kartik !</div>
        //     </div>
        // )
    }
}

export default UserGreeting

// if else
// element variable
// ternary operator
// short circuit operator