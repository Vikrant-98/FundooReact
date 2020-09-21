import React from 'react';
import DisplayNote from '../displaynote/displaynote';
import { connect } from 'react-redux';
import {getarchiveNotes} from '../../services/redux/action/action.jsx';


class Archive extends React.Component{
 
    note=(val)=>{
        return( <DisplayNote value={val} flag={true}/>)
    }

    render(){
        return(
            <div className="note-position">
            {this.props.archiveReducer.ArchiveNotes.filter((element) => {
                return element.isArchived === true;
            }).reverse().map(this.note)}
            </div>
        )
    }

}
const matStateToProps=(states)=>{
    return states
}

export default connect(matStateToProps,getarchiveNotes)(Archive);
