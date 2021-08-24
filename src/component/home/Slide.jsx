import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {products} from '../../consts/products'
import { Box, makeStyles, Typography, Button, Divider } from '@material-ui/core';
import Countdown from 'react-countdown';




const styles = makeStyles({
  component:{
    marginTop:14,
    backgroundColor: "#ffff"
    },  
  image:{
        height:150
    },
    deal:{
      padding:"17px 20px",
      display: "flex"
    },
    dealtext:{
      fontSize:22,
      marginLeft:10,
      fontWeight: 700,
      
    },
    times:{
      fontSize: 17,
      marginLeft:14,
      color:"#7f7f7f",
      marginTop:4
      
    },
    buttons:{
      marginLeft: "auto",
      backgroundColor: "#EEF3F5",
      color:"#000000",
      height:45,
      fontSize: "12px"
    },
    prodtext:{
      fontSize:15
    },
    wrapper:{
      padding: "25px 15px"
    }
    
})

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
  
};


export function Slide({timer, title}) {
    const attrib = styles()
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds, completed }) => {
      // Render a completed state
      return <span className={attrib.times}>{hours} : {minutes} : {seconds} Left</span>;
    
  }; 
  

    return (
        <Box className={attrib.component}>
           <Box className={attrib.deal}>
          <Typography className={attrib.dealtext}>{title}</Typography>
          {
            timer &&
            <>
            <img src={timerURL} style={{width:30, paddingLeft:10, marginTop:0}}/>
          <Countdown date={Date.now() + 8.64e+7} renderer={renderer}/>
            </>
          }
          <Button variant="contained" color="primary" className={attrib.buttons}>View All</Button>
           </Box>
           <Divider/>
           <Carousel responsive={responsive} infinite={true} 
           draggable={false} 
           swipeable={false}  
           centerMode={true} 
           autoPlay={true} 
           autoPlaySpeed={10000} 
           keyBoardControl={true} 
           removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container">
                        {
               products.map(product => (
                   <Box textAlign="center" className={attrib.wrapper}>
                     <img src={product.url} className={attrib.image}/>
                     <Typography className={attrib.prodtext} style={{fontWeight:600, color:"#212121"}}>{product.title.shortTitle}</Typography>
                     <Typography className={attrib.prodtext} style={{ color:"green"}}>{product.discount}</Typography>
                     <Typography className={attrib.prodtext} style={{ color:"#212121" ,opacity:0.6}}>{product.tagline}</Typography>
                   </Box>
               ))
               }
            </Carousel>
 
        </Box>
    )
}





