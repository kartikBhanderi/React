import React from 'react'
import Person from './Person'

function NameList() {
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
    const personList = persons.map(person => <Person key={person.name} person={person}></Person>)
    return <div>{personList}</div>   
}

export default NameList
