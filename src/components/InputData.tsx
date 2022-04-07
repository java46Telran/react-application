import React from 'react'
type Props = {
    timeZones: any[],
    injectTimeZone: (timeZone: string) => void
}
let selectElem: any;
const InputData: React.FC<Props> = ({timeZones, injectTimeZone}) => {
    function onSelect() {
        injectTimeZone(selectElem.value)
    }
    React.useEffect(() => {
        selectElem = document.getElementById('selectInputData');
    })

return <div>
    <select id='selectInputData' >
        {timeZones.map(tz => <option value={tz.name}>{tz.name}</option>)}
    </select>
    <button onClick={onSelect}>GO</button>
    </div>
}
export default InputData;