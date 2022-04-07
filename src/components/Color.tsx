import React from "react"
type Props = {
    color: string
}
const Color: React.FC<Props> = ({color}) => {
    const style: React.CSSProperties = {width: "40vw", height: "20vh",
     backgroundColor: color}
    return <h1>{color}<div style={style}></div></h1>
}
export default Color;