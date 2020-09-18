import React from 'react';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import RestoreFromTrashSharpIcon from '@material-ui/icons/RestoreFromTrashSharp';
import './icon.scss';
import user_service from '../../services/userService';


export default class TrashIcons extends React.Component{

    constructor(props){
        super(props);
    }

    onRestore=()=>{
        let Data = {
            noteIdList: [this.props.val.id],
            isDeleted: false,
          };
          user_service.deleteNote(Data).then((data) =>{
            console.log('Restore Note',data);
            window.location.reload(false);
          }).catch(error=>{
            console.log('Restore error',error);
        })
          console.log("Restore",Data);
    }

    onDeletePerminent=()=>{
        let Data = {
            noteIdList: [this.props.val.id]
          };
          user_service.deleteNotePermanent(Data).then((data) =>{
            console.log('Delete Note',data);
            window.location.reload(false);
          }).catch(error=>{
            console.log('Delete error',error);
        })
          console.log("Delete",Data);
    }

    render=()=>{
    return (
            <div className="note-icons trash">
                <div className="note-icons-hover">
                    <DeleteForeverSharpIcon onClick={this.onDeletePerminent} className="icon-size" />
                </div>
                <div className="note-icons-hover">
                    <RestoreFromTrashSharpIcon onClick={this.onRestore} className="icon-size" />
                </div>
            </div>
    )}

}