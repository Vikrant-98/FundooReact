import React from 'react';
import DisplayNote from '../displaynote/displaynote';
import { connect } from 'react-redux';
import * as actionCreators from '../../services/redux/action/action.jsx';


class Search extends React.Component{

    constructor(){
        super();
        this.state={
            StoreNote:[]
        }
    }

    note=(val)=>{
        return( <DisplayNote value={val}/>)
    }

    render(){
        console.log("reducer",this.props.Reducer.Notes);
        console.log("state Note",this.props.Notes);
        return(
            <div className="note-position">
            {
                this.props.Reducer.Notes.filter((element) => {
                    if(this.props.searchReducer.Text !== '')
                    {
                      return element.title.includes(this.props.searchReducer.Text)
                      || element.description.includes(this.props.searchReducer.Text);
                    }
                }).reverse().map(this.note)
            }
            <span>
                {this.props.searchReducer.Text}
            </span>
            </div>
        )
    }

}

const matStateToProps=(states)=>{
    return states
}

export default connect(matStateToProps,actionCreators)(Search);
