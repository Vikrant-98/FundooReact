import React from 'react';
import '../displaynote/displaynote.scss';
import Icons from '../icons/icons';
import pin from '../../asserts/pinn.svg';
import unpin from '../../asserts/unpinn.svg';
import TrashIcons from '../icons/trashicon';
import user_service from '../../services/userService';
import { connect } from 'react-redux';
import * as actionCreators from '../../services/redux/action/action.jsx';


class DisplayNote extends React.Component{

    constructor(props){
        super(props);
    }

    onPin=()=>{
        let Data = {
            noteIdList: [this.props.value.id],
            isPined: true
          };
          user_service.pinNote(Data).then((data) => {
            console.log('Pin Note', data);
        }).catch(error => {
            console.log('Pin error', error);
        })
    }
    
    onUnPin=()=>{
        let Data = {
            noteIdList: [this.props.value.id],
            isPined: false
          };
          user_service.pinNote(Data).then((data) => {
            console.log('Pin Note', data);
            
        }).catch(error => {
            console.log('Pin error', error);
        })
    }

    onDelete = () => {
        let Data = {
            noteIdList: [this.props.value.id],
            isDeleted: true,
        };
        user_service.deleteNote(Data).then((data) => {
            console.log('Delete Note', data);
            
        }).catch(error => {
            console.log('Delete error', error);
        })
        console.log("delete", Data);
    }

    onArchive = () => {
        let Data = {
            noteIdList: [this.props.value.id],
            isArchived: true,
        };
        user_service.archiveNote(Data).then((data) => {
            console.log('Archive Note', data);
        }).catch(error => {
            console.log('Archive error', error);
        })
        console.log("Archive", Data);
    }

    onUnArchive = () => {
        let Data = {
            noteIdList: [this.props.value.id],
            isArchived: false,
        };
        user_service.archiveNote(Data).then((data) => {
            console.log('Archive Note', data);
        }).catch(error => {
            console.log('Archive error', error);
        })
        console.log("Archive", Data);
    }

    onRestore=()=>{
        let Data = {
            noteIdList: [this.props.value.id],
            isDeleted: false,
          };
          user_service.deleteNote(Data).then((data) =>{
            console.log('Restore Note',data);
          }).catch(error=>{
            console.log('Restore error',error);
        })
          console.log("Restore",Data);
    }

    onDeletePerminent=()=>{
        let Data = {
            noteIdList: [this.props.value.id]
          };
          user_service.deleteNotePermanent(Data).then((data) =>{
            console.log('Delete Note',data);
          }).catch(error=>{
            console.log('Delete error',error);
        })
          console.log("Delete",Data);
    }

    render(){
    return (
        <div className="noteDisplay" style={{
                backgroundColor:this.props.value.color
        }}>
            <div>
                <div className="title-pinn">
                    <div className="title-note">
                        {this.props.value.title}
                    </div>
                    { this.props.value.isPined === true ? (
                        <img className="pinn" onClick={ ()=>{
                            this.onUnPin() ;
                            this.props.getAllNotes()} 
                        }  src={unpin} alt="" />

                    ) : (
                        <img className="pinn" onClick={
                            ()=>{
                                this.onPin() ;
                                this.props.getAllNotes()} 
                        } src={pin} alt="" />
                    )}
                    
                </div>
                <div className="description-note">
                    {this.props.value.description}
                </div>
            </div>
            <div className="icon-div">
                <div className="icon">
                    { this.props.value.isDeleted === false ? (
                        <Icons 
                        archive={()=>{
                            this.onArchive();
                            this.props.getAllNotes()
                        }}
                        unarchive={ ()=>{
                            this.onUnArchive();
                            this.props.getAllNotes()
                        }}
                        delete={()=>{
                            this.onDelete();
                            this.props.getAllNotes()
                        }}
                        val={this.props.value} />
                    ) : (
                        <div style={{
                            backgroundColor:this.props.value.color
                        }}>
                        <TrashIcons 
                        deleteRestore={()=>{this.onRestore();this.props.getAllNotes()}}
                        deletePermanent={()=>{this.onDeletePerminent();this.props.getAllNotes()}}
                        val={this.props.value} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
}

const matStateToProps=(states)=>{
    return states
}

export default connect(matStateToProps,actionCreators)(DisplayNote);