import axios from 'axios';
import React, { useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character';
// import { hideInfo, showInfo } from './components/HelperFunctions';
// import Info from './components/Info';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  const [error, setError] = useState(null);
  // const [currentInfoId, setCurrentInfoId] = useState(null);
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setCharacter(res.data);
      })
      .catch( err => {
        console.error(err);
        setError("Sorry, try again later!");
      })
    }, []);

  return (
    <div className="App">
      { error ? <h1>{error}</h1>: null }
      <h1 className="Header">Characters</h1>
      {
        character.map(char => {
          return <Character 
                    key={char.url}
                    info={char}
                    // showInfo={showInfo}
                    // hideInfo={hideInfo}
                  />
        })
      }
      {/* {
        currentInfoId ? <Info infoId={currentInfoId} hide={hideInfo} />: null 
      } */}
    </div>
  );
}

export default App;
