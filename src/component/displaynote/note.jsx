import React from 'react';
import '../displaynote/displaynote.scss';
import Icons from '../icons/icons'

export default function Note(props){
        console.log("props",props);
        return(
                <div className="note-display">
                    <div >
                    <div className="title-note">
                        {props.title}
                    </div>
                    <div className="description-note">
                        {props.description}
                    </div>
                    </div>
                    <div className="icon">
                        <Icons/>
                    </div>
                </div>
                
        )
    
}