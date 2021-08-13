import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    width: 40%;
    border: solid black 1px;
    background-color: antiquewhite;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0.1% 0.5%;
    margin: auto;
`

// Write your Character component here
const Character = props => {

    const { info } = props;

    return (
        <StyledCharacter>
            <h2>{info.name}</h2>
            <p>{info['birth_year']}</p>
        </StyledCharacter>
    )
}

export default Character;
