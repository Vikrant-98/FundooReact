import React from 'react';
import DisplayNote from '../displaynote/displaynote';
import user_service from '../../services/userService';
import { connect } from 'react-redux';
import {getAllNotes} from '../../services/redux/action/action.jsx';


class Archive extends React.Component{
    constructor(){
        super();
    }

    note=(val)=>{
        return( <DisplayNote value={val} flag={true}/>)
    }

    render(){
        return(
            <div className="note-position">
            {this.props.Notes.filter((element) => {
                return element.isArchived === true;
            }).reverse().map(this.note)}
            </div>
        )
    }

}
const matStateToProps=(states)=>{
    return states
}

export default connect(matStateToProps,getAllNotes)(Archive);
