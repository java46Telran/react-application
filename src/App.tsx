import React from 'react';
import Color from './components/Color';
import InputData from './components/InputData';
import timeZones from './config/time-zones';


import Timer from './components/Timer';

function App() {
const [timeZone, setTimeZone] = React.useState("Asia/Jerusalem")
  return  <div>
    <Color color={'red'}></Color>
    <Timer timeZone={timeZone}></Timer>
    <InputData timeZones={timeZones} injectTimeZone={setTimeZone}></InputData>
    </div>
}

export default App;
