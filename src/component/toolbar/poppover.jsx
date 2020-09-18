import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import '../toolbar/toolbar.scss';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: 'white',
    marginTop:'30px',
    height:'220px'
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

export default function SimplePopper() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const signOut=()=> {
    localStorage.clear();
    history.push("/");
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <AccountCircle aria-describedby={id} type="button" onClick={handleClick}/>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
            <div className="profile">
                <div className="profile-content">
                    <img className="profile-img" src="https://lh3.googleusercontent.com/ogw/ADGmqu9fD7T16OvzpM2qMPbPNiicoPEFBxuDORVJpthC=s83-c-mo" alt=""/>
                    {localStorage.getItem('email')}</div>
                <div className="profile-content">{localStorage.getItem('first')}</div>
                <div className="profile-content">{localStorage.getItem('last')}</div>
                <div className="profile-content">
                    <Button variant="contained" 
                    size="small" 
                    color="primary"
                    onClick={signOut} 
                    className={classes.margin}>Sign Out</Button>
                    </div>
            </div>
        </div>
      </Popper>
    </div>
  );
}
