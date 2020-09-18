import React from 'react';
import '../displaynote/displaynote.scss';
import Icons from '../icons/icons';
import pin from '../../asserts/pinn.svg';
import TrashIcons from '../icons/trashicon';



export default function Note(props) {

    const selectIcon=(props) => {

        switch (props) {
            case !props.value.isDeleted :
                return <Icons val={props.value} />
            case props.value.isDeleted:
                  return <TrashIcons val={props.value} />
            default:
                return <Icons val={props.value} />
        }
    
    }

    console.log("props", props);
    return (
        <div className="note-display">
            <div >
                <div className="title-pinn">
                    <div className="title-note">
                        {props.value.title}
                    </div>
                    <img className="pinn" src={pin} alt="" />
                </div>
                <div className="description-note">
                    {props.value.description}
                </div>
            </div>
            <div className="icon-div">
                <div className="icon">

                    {selectIcon(props)}
                
                    {/* {props.value.isDeleted == false ? (
                        <Icons val={props.value} />
                    ) : (
                            <TrashIcons val={props.value} />
                        )} */}
                    
                </div>
            </div>
        </div>
    )

}