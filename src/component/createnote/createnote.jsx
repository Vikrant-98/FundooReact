import React from 'react';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import TextField from '@material-ui/core/TextField';
import user_service from '../../services/userService';
import '../createnote/createnote.scss';
import Icons from '../icons/icons';
import pin from '../../asserts/pinn.svg';
import { connect } from 'react-redux';
import * as actionCreators from '../../services/redux/action/action.jsx';
import { withStyles } from '@material-ui/core/styles';


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

class CreateNote extends React.Component{
    constructor(){
        super();
        
        this.state={
            open: true,
            title:"",
            note:"",
            responce:false
        }
        
    } 
    handleNoteOpen = () => {
        this.setState({
            open:false
        },() => {console.log(this.state);})
    }

    handleNoteclose = () => {
        let userData = {
            title: this.state.title,
            description: this.state.note
          };
        if(this.state.title !="" && this.state.description !=""){
        user_service.addNote(userData).then((data) =>{
            console.log('data after added note',data);

            this.setState({
                open:true,
                title:"",
                note:"",
                reponce:true
            },() => {console.log(this.state);});
      }).catch(error=>{
            this.setState({
                open:true
            },() => {console.log(this.state);});
            console.log("error",error);
      })
    }
      };

    handleInput = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        },() => {console.log(this.state);})
    }

      render()
          {
            const { classes } = this.props;
            return(
                <div className="note">
                    {this.state.open ? (
                 <div 
                 className="take-note"
                 onClick={this.handleNoteOpen}>
                 <span>
                 Take a note...
                 </span>
                 <div className="take-note-icon">
                 <div className="take-icon">
                     <CheckBoxOutlinedIcon/>
                 </div>
                 <div className="take-icon">
                     <BrushOutlinedIcon/>
                 </div>
                 <div className="take-icon">
                     <ImageOutlinedIcon/>
                 </div>
                 </div>
             </div>
              ) : (
                <div className="take-note take-note-expand">
                        <div className="take-note-input">
                        <div className="title-pin">
                            <TextField 
                                className={classes.underline}
                                name="title"
                                onChange={this.handleInput}
                                
                                placeholder="Title"
                                multiline
                            />
                            <img className="pin" src={pin} alt=""/>
                        </div>
                        <TextField 
                                className={classes.underline}
                                name="note"
                                onChange={this.handleInput}
                                placeholder="Take a note.."
                                multiline
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                        </div>
                        <div className="align-icon">
                        <div className="position">
                            <Icons val={{color:'#ffffff'}} archive={false}/>
                        </div>
                        <div 
                            className="close"
                            >
                            <div onClick={()=>{
                                this.handleNoteclose();
                                this.props.getAllNotes()
                                }}>
                                close
                            </div>
                        </div>
                        </div>
                    </div>
              )}
            </div>
            )
          }    
}
const matStateToProps=(states)=>{
    return states
}

export default connect(matStateToProps,actionCreators)(withStyles(styles)((CreateNote)));