import React from 'react';


import Timer from './components/Timer';

function App() {
  return  <div style={{display: "flex", alignItems: "center", marginTop: "30vh", flexDirection:"column"}}>
<div style={{display: "flex", justifyContent: "space-around"}}><Timer timeZone='Asia/Urumqi' city="Beijing"/>
<Timer timeZone='Europe/London' city="London"/></div>
<div style={{display: "flex", justifyContent: "space-around"}}><Timer timeZone='Asia/Jerusalem' city="Jerusalem"/>
<Timer timeZone='Europe/Paris' city="Paris"/></div>

    </div>
}

export default App;
