import React from 'react';
import '../displaynote/displaynote.scss';
import Icons from '../icons/icons';
import pin from '../../asserts/pinn.svg';
import unpin from '../../asserts/unpinn.svg';
import TrashIcons from '../icons/trashicon';
import user_service from '../../services/userService';
import { connect } from 'react-redux';
import * as actionCreators from '../../services/redux/action/action.jsx';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Truncate from 'react-truncate';


const styles = {
    underline: {    
    "& .MuiInput-underline:before": {
        position: 'fixed'
    },
    "& .MuiInput-underline:after": {
        position: 'fixed'
    }
    }
  };

class DisplayNote extends React.Component{

    constructor(props){
        super(props);

        this.state={
            openStatus:false,
            title: '',
            description: ''
        }

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

    onUpdate=()=>{
        let Data = {
            noteId: this.props.value.id,
            title: this.state.title,
            description: this.state.description
          };
          user_service.updateNote(Data).then((data) =>{
            console.log('Update Note',data);
          }).catch(error=>{
            console.log('Update error',error);
        })
          console.log("Update",Data);
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        },() => {console.log(this.state);})
    }

    render(){
        const { classes } = this.props;
    return (
        <>
        <div className="noteDisplay" style={{
                backgroundColor:this.props.value.color
        }}>
            <div className="align-title-desc">
                <div ref={this.useRef} className="title-pinn"
                onClick={()=>{
                    this.setState({
                        openStatus:!this.state.openStatus,
                        title:this.props.value.title,
                        description:this.props.value.description
                    })
                }}>
                    <div className="title-note">
                        {this.props.value.title}
                    </div>
                    
                    <div className="description-note">
                    <Truncate lines={10} ellipsis={<span>...</span>}>
                     {this.props.value.description}
                    </Truncate>  
                    </div>
            </div>
                { this.props.value.isPined === true ? (
                        <img className="pinn" 
                        onClick={ ()=>{
                            this.onUnPin() ;
                            this.props.getAllNotes()} 
                        }  
                        src={unpin} alt="" />

                    ) : (
                        <img className="pinn" onClick={
                            ()=>{
                                this.onPin() ;
                                this.props.getAllNotes()} 
                        } src={pin} alt="" />
                    )}
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
                            this.props.getarchiveNotes()
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
                        deleteRestore={()=>{this.onRestore();this.props.getTrashNotes()}}
                        deletePermanent={()=>{this.onDeletePerminent();this.props.getTrashNotes()}}
                        val={this.props.value} />
                        </div>
                    )}
                </div>
            </div>
            <Dialog
            open={this.state.openStatus}>
                <div
                    className="dialog-body" 
                    style={{
                    width:"570px",
                    minHeight:"160px",
                    padding:"15px",
                    backgroundColor:this.props.value.color,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"flex-start"
                }}>
                    <TextField 
                                className={classes.underline}
                                name="title"
                                defaultValue={this.props.value.title}
                                multiline
                                onChange={this.handleInput}
                            />
                    <TextField 
                                className={classes.underline}
                                name="description"
                                defaultValue={this.props.value.description}
                                multiline
                                onChange={this.handleInput}
                            />
                </div>
                <div
                style={{
                    padding: "10px",
                    backgroundColor:this.props.value.color,
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                <div className="dialog-icon">
                <Icons
                    val={this.props.value}/>
                </div>
                    <div className="dialog-close"
                    onClick={()=>{
                        this.onUpdate();
                        this.props.getAllNotes();
                        this.setState({
                            openStatus:!this.state.openStatus
                        });
                    }}>
                        Close
                    </div>
                    </div>
            </Dialog>
        </div>
        </>
    )
}
}

const matStateToProps=(states)=>{
    return states
}

export default connect(matStateToProps,actionCreators)(withStyles(styles)(DisplayNote));