import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'kartik'
        }
        console.log('Constructor')
    }
    
    static getDerivedStateFromProps(props, state)
    {
        console.log('getDerivedStateFromProps')
        return null;
    }

    
    componentDidMount() {
        console.log('componentDidMount')
    }
    
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'yash'
        })
    }

    render() {
        console.log('render');
        return (
            <div>
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
            </div>
            <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
