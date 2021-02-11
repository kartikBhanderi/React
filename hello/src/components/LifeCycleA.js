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

    render() {
        console.log('render');
        return (
            <div>
            <div>
                Lifecycle A
            </div>
            <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
