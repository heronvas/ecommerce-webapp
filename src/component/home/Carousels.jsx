import React from 'react'
import {bannerData} from '../../consts/category'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, makeStyles } from '@material-ui/core'


const styles = makeStyles({
    imagewrap:{
        width:"100%",
        height:280
    }
});

export function Carousels() {

    const carouselstyle = styles();

    return (
        <Carousel
        autoPlay={true}
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}>
            {
                bannerData.map(data => (
                    <img src={data} className={carouselstyle.imagewrap}/>
                ))
            }
        </Carousel>
    )
}

