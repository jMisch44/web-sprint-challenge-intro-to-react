import React from 'react';


// Write your Character component here
const Character = props => {

    const { info } = props;

    return (
        <div>
            <h2>{info.name}</h2>
        </div>
    )
}

export default Character;
