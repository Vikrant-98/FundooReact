import React from 'react';
import Note from './note';
import '../displaynote/displaynote.scss';
import user_service from '../../services/userService';


export default class DisplayNote extends React.Component{
    constructor(){
        super();
        this.getAllNotes();
        this.state={
            notes:[]
        }
        console.log("notes :",this.state.notes)
    }

    getAllNotes=()=>{
        user_service.getAllNotes().then((data) =>{
            console.log('All Notes',data.data.data);
            
            this.setState({
                notes:data.data.data.data
            },()=>console.log("All Notes call",this.state.notes))
            
      }).catch(error=>{

      })
    }

    note=(val)=>{
        return(
            <Note
            title={val.title}
            description={val.description}/>
        )
    }

    render(){
        console.log("note title",this.state.notes.title);
        console.log("note Description",this.state.notes.title);
        return(
            <div className="note-position">
            {this.state.notes.map(this.note)}
            </div>
        )
        
    }
}