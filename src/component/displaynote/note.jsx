import React from 'react';
import DisplayNote from '../displaynote/displaynote';
import '../displaynote/displaynote.scss';
import { connect } from 'react-redux';
import {getAllNotes} from '../../services/redux/action/action.jsx';


class Note extends React.Component{
    constructor(){
        super();
        // this.getAllNotes();
       
        this.state={
            notes:[]
    }
        console.log("notes :",this.state.notes)
    }

    // getAllNotes=()=>{
    //     user_service.getAllNotes().then((data) =>{
    //         console.log('All Notes',data.data.data);
            
    //         this.setState({
    //             notes:data.data.data.data
    //         },()=>console.log("All Notes call",this.state.notes))
            
    //   }).catch(error=>{

    //   })
    // }

    note=(val)=>{
        return( <DisplayNote 
            handleClick={this.props.getAllNotes}
            value={val}/>)
    }

    render(){
        
        return(
            <>
            <div className="pin-unpin">
                <span className="pin">
                    Pinned
                </span>
                <div className="note-position">
                    {this.props.Notes.filter((element) => {
                        return element.isArchived === false && element.isDeleted === false && element.isPined === false;
                    }).reverse().map(this.note)}
                </div>
            </div>
            <div className="pin-unpin">
                <span className="pin">
                    Unpinned
                </span>
                <div className="note-position">
                {this.props.Notes.filter((element) => {
                        return element.isArchived === false && element.isDeleted === false && element.isPined === true;
                    }).reverse().map(this.note)}
                </div>
            </div>
            {/* <button onClick={this.props.getAllNotes}>
                click
            </button> */}
            </>
        )
    }
}

const matStateToProps=(states)=>{
    return states
}

export default connect(matStateToProps,getAllNotes)(Note);