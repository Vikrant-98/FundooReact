import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import '../icons/icon.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    borderRadius:'3px',
    maxWidth:'146px',
    display:'flex',
    flexDirection:'row',
    flexFlow:'wrap',
    padding: theme.spacing(1),
    backgroundColor:'white'
  },
}));

const colors=[{
    background: '#FFFFFF',
},{
    background: '#fa8072',
},{
    background: '#FF9900',
},{
    background: '#FFFF64',
},{
    background: '#66FF66',
},{
    background: '#008080',
},{
    background: '#2F5FFF',
},{
    background: '#00FFFF',
},{
    background: '#9B2C9B',
},{
    background: '#FFC0CB',
},{
    background: '#FF1A06',
},{
    background: '#808080',
}]

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const demo=(val)=>{
      return ( <div className="color">
          <div style={{
              backgroundColor:val.background,
              color:val.background,
              width:'30px',
              height:'30px',
              borderRadius:'15px',
              cursor:'pointer'
              }}>
              </div>
          </div> )
  }

  return (
    <>
      <PaletteOutlinedIcon className="icon-size" onClick={handleClick}/>
      <Popper id={id}  open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>{colors.map(demo)}</div>
      </Popper>
    </>
  );
}