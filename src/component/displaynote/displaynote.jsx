import React from 'react';
import '../displaynote/displaynote.scss'

export default class DisplayNote extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div className="note-display">
                    Hello
                </div>
            </div>
        )
    }
}