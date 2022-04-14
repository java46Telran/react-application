import React from 'react';
import Life from './components/Life';
import lifeGameConfig from './config/lifeGameConfig.json'

function App() {


  return  <div>
    <Life dimension={lifeGameConfig.dimension} ticInterval={lifeGameConfig.tic} ></Life>
    <br></br> <br></br> <br></br>
    <Life dimension={lifeGameConfig.dimension} ticInterval={lifeGameConfig.tic} ></Life>

    
    </div>
}

export default App;
