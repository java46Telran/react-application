import React, { useEffect } from 'react';
type Props = {
    interval?: number,
    timeZone: string,
    

}
const Timer: React.FC<Props> = ({interval, timeZone}) => {
    const [time, setTime] = React.useState(new Date());
    function tic():void {
        
        setTime(new Date());
    }
    useEffect(() => {
        setInterval(tic, interval || 1000);
    }, [interval])
    
    return <div style={{marginLeft: "10vw"}}>
        <h3>Current Time in {timeZone}</h3>
        <label>{time.toLocaleTimeString([], {timeZone})}</label>
    </div>
}
export default Timer;