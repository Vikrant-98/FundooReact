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
    code: '#FFFFFF',
},{
    code: '#fa8072',
},{
    code: '#FF9900',
},{
    code: '#FFFF64',
},{
    code: '#66FF66',
},{
    code: '#008080',
},{
    code: '#2F5FFF',
},{
    code: '#00FFFF',
},{
    code: '#9B2C9B',
},{
    code: '#FFC0CB',
},{
    code: '#FF1A06',
},{
    code: '#808080',
}]

export default function SimplePopper(props) {
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
              backgroundColor:val.code,
              color:val.code,
              width:'28px',
              height:'28px',
              borderRadius:'15px',
              cursor:'pointer'
              }}
              onClick={()=>{
                props.putColor(val);
                handleClick()}}>
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