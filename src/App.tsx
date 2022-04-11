import React from 'react';
import Color from './components/Color';
import InputData from './components/InputData';
import timeZones from './config/time-zones';
import colors from './config/colors';


import Timer from './components/Timer';
type ComponentNames = "input" | "timer" | "color"
function App() {
const [timeZone, setTimeZone] = React.useState("Asia/Jerusalem");
const [color, setColor] = React.useState("red");
const [componentName, setComponentName] = React.useState<ComponentNames>('input');
const mapComponents: Map<ComponentNames, React.ReactNode> = new Map();
mapComponents.set("color", <Color color={color}></Color>);
mapComponents.set("input", <InputData timeZones={timeZones} injectTimeZone={setTimeZone}
colors={colors} injectColor={setColor}></InputData>)
mapComponents.set("timer", <Timer timeZone={timeZone}></Timer>)

  return  <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    {Array.from(mapComponents.keys()).map(k => <button onClick={() => setComponentName(k)}>{k}</button>)}
    {mapComponents.get(componentName)}
    </div>
}

export default App;
