import React from 'react'
import { Box, makeStyles, Typography} from '@material-ui/core'; 
import {categoryData} from '../../consts/category'


const useStyle = makeStyles({
    component:{
        display: 'flex',
        margin: '60px 3px',
        justifyContent: 'space between',
       

     },
     container:{
         padding: '6px 5px'
          
     },
     image:{
         width:"100%"
     },
     text:{
        fontSize: 14, 
     }

})

export function Categories() {

    const styling = useStyle()

    return (
        <Box className = {styling.component}>
            {
                categoryData.map(data => (
                    <Box className={styling.container} textAlign="center">
                        <img src={data.url} className={styling.image} />
                        <Typography className={styling.text}>{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

