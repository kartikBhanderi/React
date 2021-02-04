import React from 'react'

const  Greet = (props) => {
    // console.log(props.name);
    // props.name = "change"; // immutable
    return (
        <div>
            <h1> Hello {props.name} AKA {props.heroName} ! </h1>
            {props.children}
        </div>
    )
}

// export const  Greet = () => <h1> Hello Kartik ! </h1>;
export default Greet