import React from 'react';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import './icon.scss';
import { StylesProvider } from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import user_service from '../../services/userService';
import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlined';
import Popper from '../icons/popper';

export default class Icons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }

    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };

    onDelete = () => {
        let Data = {
            noteIdList: [this.props.val.id],
            isDeleted: true,
        };
        user_service.deleteNote(Data).then((data) => {
            console.log('Delete Note', data);
            window.location.reload(false);
        }).catch(error => {
            console.log('Delete error', error);
        })
        console.log("delete", Data);
    }

    onArchive = () => {
        let Data = {
            noteIdList: [this.props.val.id],
            isArchived: true,
        };
        user_service.archiveNote(Data).then((data) => {
            console.log('Archive Note', data);
            window.location.reload(false);
        }).catch(error => {
            console.log('Archive error', error);
        })
        console.log("Archive", Data);
    }

    onUnArchive = () => {
        let Data = {
            noteIdList: [this.props.val.id],
            isArchived: false,
        };
        user_service.archiveNote(Data).then((data) => {
            console.log('Archive Note', data);
            window.location.reload(false);
        }).catch(error => {
            console.log('Archive error', error);
        })
        console.log("Archive", Data);
    }

    render = () => {

        return (
            <StylesProvider injectFirst>
                <div className="note-icons" style={{
                    backgroundColor:this.props.val.color
                }}>
                    <div className="note-icons-hover">
                        <AddAlertOutlinedIcon className="icon-size" />
                    </div>
                    <div className="note-icons-hover">
                        <PersonAddOutlinedIcon className="icon-size" />
                    </div>
                    <div className="note-icons-hover">
                        <Popper/>
                    </div>
                    <div className="note-icons-hover">
                        <ImageOutlinedIcon className="icon-size" />
                    </div>
                    <div className="note-icons-hover">
                        {this.props.archive === false || this.props.val.isArchived === false ? (
                            <ArchiveOutlinedIcon onClick={this.onArchive} className="icon-size" />
                        ) : (
                                <UnarchiveOutlinedIcon onClick={this.onUnArchive} className="icon-size" />
                            )}
                    </div>
                    <div>
                        <div className="note-icons-hover">
                            <MoreVertIcon onClick={this.handleClick} />
                        </div>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.onDelete}>Delete</MenuItem>
                        </Menu>
                    </div>
                </div>
            </StylesProvider>
        )
    }

}