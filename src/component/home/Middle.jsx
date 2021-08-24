import React from 'react'
import {imageURL} from '../../consts/middata'
import {Box, makeStyles} from '@material-ui/core'

const styles = makeStyles({
    wrapper:{
        display: "flex"
    }
})


export function Middle() {

    const attrib = styles()
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <div>
            <Box className={attrib.wrapper}>
            {
                    imageURL.map(image => (
                        <Box>
                            <img src={image} style={{width: "100%", padding: "13px 2px"}}/>
                        </Box>
                    ))
                       
            }
            </Box>
            <img src={coronaURL} style={{width: "100%",}}/>
        </div>

        
    )
}

