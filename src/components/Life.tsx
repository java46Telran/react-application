import React from 'react'
import LifeMatrix from '../service/LifeMatrix'
import { getRandomMatrix } from '../util/random'
import Matrix from './Matrix'
type Props = {
    dimension: number,
    ticInterval: number
}
const Life: React.FC<Props> = ({dimension, ticInterval}) => {
    const lifeMatrix = React.useRef<LifeMatrix>();
    const [numbers, setNumbers] = React.useState<number[][] >([[]]);
    function tic() {
        if(!lifeMatrix.current) {
            lifeMatrix.current = new LifeMatrix(getRandomMatrix(dimension, dimension, 0, 1));
        }
        setNumbers(lifeMatrix.current.nextStep());
    }
    React.useEffect(() => {
        const intervalId = setInterval(tic, ticInterval);
        return () => clearInterval(intervalId)
    }, [ticInterval])
    return <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Matrix numbers={numbers} ></Matrix>
    </div>
}
export default Life;