import { useMediaQuery } from "@mui/material";

export default function useLayout(): string {
    const portrait = useMediaQuery('(max-width: 600px)');
    const landscape = useMediaQuery('(max-width: 900px)');
    let res:string = "laptop";
   if (portrait) {
      res = "portrait";
   } else if (landscape) {
       res = "landscape";
   } 
   
   return res;

}