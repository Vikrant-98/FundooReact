import React , {useState} from "react";
import Drawer from '@material-ui/core/Drawer';

export default drawerStatus=()=>{
    const [open , setOpen] = useState(false);

    const handleDrawer=()=>{
        setOpen(true)
    }
        return(
            <Drawer
            anchor='left'
            open={open}
            onClose={!open}
            >
                <h1>This is drawer</h1>
            </Drawer>
        )
}