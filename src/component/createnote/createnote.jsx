import React from 'react';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import TextField from '@material-ui/core/TextField';
import user_service from '../../services/userService';
import '../createnote/createnote.scss';
import Icons from '../icons/icons';
import { makeStyles} from '@material-ui/core/styles';
import pin from '../../asserts/pinn.svg';

// const classes = useStyles();

// useStyles = makeStyles(() => ({

//         textField:{
//             "& .MuiInput-underline:before": {
//                 left: '0',
//                 right: '0',
//                 bottom: '0',
//                 content: "",
//                 position: 'absolute',
//                 transition: 'none',
//                 borderBottom: 'none',
//                 pointerEvents: 'none',
//             },
//             "& .MuiInput-underline:after": {
//                 left: '0',
//                 right: '0',
//                 bottom: '0',
//                 content: "",
//                 position: 'absolute',
//                 transition: 'none',
//                 borderBottom: 'none',
//                 pointerEvents: 'none',
//             }
//         }   
//     }))

export default class CreateNote extends React.Component{
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
        
        user_service.addNote(userData).then((data) =>{
            console.log('data after added note',data);
            // window.location.reload(false);

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
      };

    handleInput = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        },() => {console.log(this.state);})
    }

      render()
          {
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
                                className="title-input"
                                name="title"
                                onChange={this.handleInput}
                                placeholder="Title"
                                multiline
                            />
                            <img className="pin" src={pin} alt=""/>
                        </div>
                        <TextField 
                                className="title-input"
                                name="note"
                                onChange={this.handleInput}
                                placeholder="Take a note.."
                                multiline
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                        </div>
                        <div className="position">
                            <Icons val={{color:'#ffffff'}} archive={false}/>
                        </div>
                        <div 
                            className="close"
                            >
                            <div onClick={this.handleNoteclose}>
                                close
                            </div>
                        </div>
                    </div>
              )}
            </div>
            )
          }    
}