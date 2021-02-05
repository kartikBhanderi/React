import React from 'react'

const  Greet = (props) => {

    const {name, heroName} = props

    // console.log(props.name);
    // props.name = "change"; // immutable
    return (
        <div>
            <h1> Hello {name} AKA {heroName} ! </h1>
            {props.children}
        </div>
    )
}

// export const  Greet = () => <h1> Hello Kartik ! </h1>;
export default Greet