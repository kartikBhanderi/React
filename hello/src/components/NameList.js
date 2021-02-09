import React from 'react'
import Person from './Person'

function NameList() {
    let persons = [
        {
            name: 'kartik',
            age: 20
        },
        {
            name: 'vraj',
            age: 19
        },
        {
            name: 'yash',
            age: 39
        }
    ]
    const personList = persons.map(person => <Person person={person}></Person>)
    return <div>{personList}</div>   
}

export default NameList
