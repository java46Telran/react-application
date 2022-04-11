import React from 'react'
type Props = {
    timeZones: any[],
    colors: string[],
    injectTimeZone: (timeZone: string) => void,
    injectColor: (color: string) => void
}
let selectTimeZoneElem: any;
let selectColorElem: any;
const InputData: React.FC<Props> = ({timeZones, injectTimeZone, colors, injectColor}) => {
    function onSelectTimeZone() {
        injectTimeZone(selectTimeZoneElem.value)
    }
    function onSelectColor() {
        injectColor(selectColorElem.value);
    }
    
    React.useEffect(() => {
      selectTimeZoneElem = document.getElementById('selectTimeZone');
        selectColorElem = document.getElementById('selectColor')
    })

return <div><div>
    <select id='selectTimeZone' >
        {timeZones.map(tz => <option value={tz.name}>{tz.name}</option>)}
    </select>
    <button onClick={onSelectTimeZone}>GO</button>
    </div>
    <div>
    <select id='selectColor' >
        {colors.map(c => <option value={c}>{c}</option>)}
    </select>
    <button onClick={onSelectColor}>GO</button>
    </div>
    </div>
}
export default InputData;