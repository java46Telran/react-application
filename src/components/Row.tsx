import React from 'react'
import lifeGameConfig from "../config/lifeGameConfig.json"
function getCellSize() {
    return Math.min(window.innerHeight, window.innerWidth) / lifeGameConfig.dimension - 2; //taking into consideration border
}
function getStyle(cellValue: number): React.CSSProperties {
    const size: number = getCellSize();
    return {
        backgroundColor: !!cellValue ? 'black' : 'white',
        width: size,
        height: size,
        border: '1px solid gray'
    }
}
type Props = {
    row: number[]
}
const Row: React.FC<Props> = ({row}) => {
    function getCells(): React.ReactNode {
       return row.map((v, i) => <div style={getStyle(v)} key={i}></div>)
    }
    return <div style={{display: 'flex'}}>
        {getCells()}
    </div>
}
export default Row;


