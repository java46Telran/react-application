import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import React from "react";

import Distribution from "../../models/Distribution";

import { getStatistics } from "../../util/functions";
type Props = {
    field: string,
    title: string,
    unit: string,
    intervals: number[],
    objects: any[]

}
function getStatisticsColumns(unit: string): GridColumns {
    const columns: GridColumns = [
        { field: 'min', headerName: `FROM (${unit}) `, flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'max', headerName: `TO (${unit})`, flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'amount', headerName: `Amount`, flex: 1, headerAlign: 'center', align: 'center' }
    ]
    return columns;
}
function getRows(distribution: Distribution): any[] {
    return distribution.map((d, i) => {
        
        return {...d, id: i};
    })
}
const Statistics: React.FC<Props> = ({ field, title, unit, intervals, objects }) => {
    const columns = React.useMemo(() => getStatisticsColumns(unit), [unit]);

    const [interval, setInterval] = React.useState(intervals[0]);
    const flShow = React.useRef<boolean>(true);
    const [rows, setRows] = React.useState<any[]>([]);

    function showStatistics() {

        flShow.current = false;
        const distribution: Distribution = getStatistics(field, interval, objects);
      
        setRows(getRows(distribution));
        

    }
    function intervalChange(event: any) {
        setInterval(+event.target.value);
        flShow.current = true;
    }


    return <Box>
        <Typography  sx={{textAlign: 'center', fontSize: {xs:'1.5em',
         sm:"0.8em", md: '2em'}}}>{title}</Typography>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <Typography>Interval Length</Typography>
            <Select sx={{marginLeft: 3}}value={interval} onChange={intervalChange} >
            {intervals.map(i => <MenuItem key={i} value={i}>{`${i}${unit}`}</MenuItem>)}

        </Select>
        <Button onClick={showStatistics} disabled={!flShow.current}>Show Statistics</Button></Box>
        <Box sx={{height: {xs: "60vh", sm: "45vh", md: "60vh"}}}>
            <DataGrid rows={rows} columns={columns}></DataGrid>
        </Box>
        

    </Box>
}
export default Statistics;