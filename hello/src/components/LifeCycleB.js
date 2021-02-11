import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'kartik'
        }
        console.log('B Constructor')
    }
    
    static getDerivedStateFromProps(props, state)
    {
        console.log('B getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('B componentDidMount')
    }


    shouldComponentUpdate(){
        console.log('B shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('B getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('B componentDidUpdate')
    }

    render() {
        console.log('B render');
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifeCycleB
