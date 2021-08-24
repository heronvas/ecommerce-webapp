import React from 'react'
import {Categories} from './Categories'
import {Carousels} from './Carousels'
import {Middle} from './Middle'
import {Slide} from './Slide'
import {Box, makeStyles} from '@material-ui/core';

const styles = makeStyles({
    components:{
        padding: 13,
        background: "#f2f2f2"
        
    }
})



export function Home() {

    const homes = styles();

    return (
     <Box>
         <Categories/>
         <Box className = {homes.components}>
         <Carousels/>
         <Middle/>
         <Slide 
            timer={true}
            title="Deals of the day"
            />
         <Slide 
            timer={false}
            title="Discounts for you"
         />
         <Slide 
            timer={false}
            title="Suggested Items"
         />
         <Slide 
            timer={false}
            title="Recommended Items"
         />
         <Slide 
            timer={false}
            title="Bestsellers"
         />
         </Box>   
        
     </Box>
     )
}

