import React, { useEffect } from 'react';
type Props = {
    interval?: number
}
const Timer: React.FC<Props> = ({interval}) => {
    const [time, setTime] = React.useState(new Date());
    function tic():void {
        console.log("kuku");
        setTime(new Date());
    }
    useEffect(() => {
        setInterval(tic, interval || 1000);
    }, [])
    
    return <div style={{marginLeft: '50vw'}}>
        <h3>Current Time</h3>
        <label>{time.toLocaleTimeString()}</label>
    </div>
}
export default Timer;