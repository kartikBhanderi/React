import React, { Component } from 'react'

class Ref extends Component {

    constructor(props) {
        super(props)
    
        this.refDemo = React.createRef()
        this.cbRef = null
        this.setcbRef = (element) => {
            this.cbRef = element
        }
    }
    
    componentDidMount = () => {
        if(this.cbRef) {
            this.cbRef.focus()
        }
        // console.log(this.refDemo)
        // this.refDemo.current.focus()
    }

    clickHandler = () => {
        alert(this.cbRef.value)
        // alert(this.refDemo.current.value)
    }

    render() {
        return (
            <div>
                Name : <input type="text" ref={this.refDemo}></input>
                Name : <input type="text" ref={this.setcbRef}></input>
                <button onClick={this.clickHandler}> Click Me !</button>
            </div>
        )
    }
}
export default Ref
