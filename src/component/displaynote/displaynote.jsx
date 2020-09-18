import React from 'react';
import '../displaynote/displaynote.scss';
import Icons from '../icons/icons';
import pin from '../../asserts/pinn.svg';
import unpin from '../../asserts/unpinn.svg';
import TrashIcons from '../icons/trashicon';
import user_service from '../../services/userService'



export default class Note extends React.Component{

    constructor(props){
        super(props);
    }

    onPin=()=>{
        let Data = {
            noteIdList: [this.props.value.id],
            isPined: true
          };
          user_service.pinNote(Data).then((data) => {
            console.log('Pin Note', data);
            window.location.reload(false);
        }).catch(error => {
            console.log('Pin error', error);
        })
    }
    
    onUnPin=()=>{
        let Data = {
            noteIdList: [this.props.value.id],
            isPined: false
          };
          user_service.pinNote(Data).then((data) => {
            console.log('Pin Note', data);
            window.location.reload(false);
        }).catch(error => {
            console.log('Pin error', error);
        })
    }

    render(){
        console.log("props", this.props);
    return (
        <div className="noteDisplay" style={{
                backgroundColor:this.props.value.color
        }}>
            <div>
                <div className="title-pinn">
                    <div className="title-note">
                        {this.props.value.title}
                    </div>
                    { this.props.value.isPined === false ? (
                        <img className="pinn" onClick={this.onPin} src={unpin} alt="" />

                    ) : (
                        <img className="pinn" onClick={this.onUnPin} src={pin} alt="" />
                    )}
                    
                </div>
                <div className="description-note">
                    {this.props.value.description}
                </div>
            </div>
            <div className="icon-div">
                <div className="icon">
                    { this.props.value.isDeleted === false ? (
                        <Icons val={this.props.value} />
                    ) : (
                        <TrashIcons val={this.props.value} />
                    )}
                </div>
            </div>
        </div>
    )
}
}