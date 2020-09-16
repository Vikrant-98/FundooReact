import React from 'react';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import './icon.scss';
import { StylesProvider } from "@material-ui/core/styles";

export default function icons(){
       
        return(
            <StylesProvider injectFirst>
                <div className="note-icons">
                    <div className="note-icons-hover">
                    <AddAlertOutlinedIcon  className="icon-size"/>
                    </div>
                    <div className="note-icons-hover">
                    <PersonAddOutlinedIcon className="icon-size"/>
                    </div>
                    <div className="note-icons-hover">
                    <PaletteOutlinedIcon className="icon-size"/>
                    </div>
                    <div className="note-icons-hover">
                    <ImageOutlinedIcon className="icon-size"/>
                    </div>
                    <div className="note-icons-hover">
                    <ArchiveOutlinedIcon className="icon-size"/>
                    </div>
                    
                </div>
            </StylesProvider>
        )
    
}