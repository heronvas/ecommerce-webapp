import React from 'react'
import {Dialog, DialogContent, makeStyles} from '@material-ui/core'


const styling = makeStyles({
    component:{
        height: "70vh",
        width:"90vh"
    }
})


export default function Login({open, setOpen}) {
    
    const handleClose = () =>{
        setOpen(false)
    }

    const styless = styling()
    
    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogContent className={styless.component}>
                <p>hello</p>
            </DialogContent>
        </Dialog>
    )
}

