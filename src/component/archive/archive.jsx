import React from 'react';
import DisplayNote from '../displaynote/displaynote';
import user_service from '../../services/userService';

export default class Archive extends React.Component{
    constructor(){
        super();
        this.getAllArchiveNotes();
        this.state={
            notes:[]
        }
    }

    getAllArchiveNotes=()=>{
        user_service.getArchiveNotes().then((data) =>{
            console.log('All Archive Notes',data.data.data);
            
            this.setState({
                notes:data.data.data.data
            },()=>console.log("All Archive call",this.state.notes))
            
      }).catch(error=>{

      })
    }

    note=(val)=>{
        return( <DisplayNote value={val}/>)
    }

    render(){
        return(
            <div className="note-position">
            {this.state.notes.filter((element) => {
                return element.isArchived === true;
            }).reverse().map(this.note)}
            </div>
        )
    }

}
