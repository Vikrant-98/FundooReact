import React from 'react';
import DisplayNote from '../displaynote/displaynote';
import '../displaynote/displaynote.scss';
import { connect } from 'react-redux';
import {getAllNotes} from '../../services/redux/action/action.jsx';


class Note extends React.Component{

    note=(val)=>{
        return( <DisplayNote 
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
                    {this.props.Reducer.Notes.filter((element) => {
                        return element.isArchived === false && element.isDeleted === false && element.isPined === true;
                    }).reverse().map(this.note)}
                </div>
            </div>
            <div className="pin-unpin">
                <span className="pin">
                    Unpinned
                </span>
                <div className="note-position">
                    {this.props.Reducer.Notes.filter((element) => {
                        return element.isArchived === false && element.isDeleted === false && element.isPined === false;
                    }).reverse().map(this.note)}
                </div>
            </div>
            </>
        )
    }
}

const matStateToProps=(states)=>{
    return states
}

export default connect(matStateToProps,getAllNotes)(Note);