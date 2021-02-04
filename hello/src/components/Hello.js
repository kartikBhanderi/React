import React from 'react';

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Kartik</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'Hello', className : 'dummyClass'}, 
        React.createElement('h1', null, "Hello Kartik"));
}

export default Hello