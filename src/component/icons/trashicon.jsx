import React from 'react';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import RestoreFromTrashSharpIcon from '@material-ui/icons/RestoreFromTrashSharp';
import './icon.scss';
import user_service from '../../services/userService';


export default class TrashIcons extends React.Component{

    constructor(props){
        super(props);
    }

   render=()=>{
    return (
            <div className="note-icons trash" >
                <div className="note-icons-hover" >
                    <DeleteForeverSharpIcon onClick={()=>{this.props.deletePermanent()}} className="icon-size" />
                </div>
                <div className="note-icons-hover">
                    <RestoreFromTrashSharpIcon onClick={()=>{this.props.deleteRestore()}} className="icon-size" />
                </div>
            </div>
    )}

}