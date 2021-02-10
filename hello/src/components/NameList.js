import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['kartik','yash','vraj','kartik']
    let persons = [
        {
            id: 1,
            name: 'kartik',
            age: 20
        },
        {
            id: 2,
            name: 'vraj',
            age: 19
        },
        {
            id: 3,
            name: 'yash',
            age: 39
        }
    ]
    const nameList = names.map((name,index) => <h2 key={index}>{index}.{name}</h2>)
    return <div>{nameList}</div>   
}

export default NameList
