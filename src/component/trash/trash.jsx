import React from 'react';
import DisplayNote from '../displaynote/displaynote';
import { connect } from 'react-redux';
import {getTrashNotes} from '../../services/redux/action/action.jsx';


class Trash extends React.Component{
  
    note=(val)=>{
        return( <DisplayNote value={val}/>)
    }

    render(){
        return(
            <div className="note-position">
            {this.props.deleteReducer.DeleteNotes.filter((element) => {
                return element.isDeleted === true;
            }).reverse().map(this.note)}
            </div>
        )
    }

}

const matStateToProps=(states)=>{
    return states
}

export default connect(matStateToProps,getTrashNotes)(Trash);
