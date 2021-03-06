import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';
import Popover from '../toolbar/poppover';
import Note from '../note/notebox';
import Trash from '../trash/trash';
import '../toolbar/toolbar.scss';
import {ProtectedRoute} from '../../services/auth/protected';
import {Link,Switch } from "react-router-dom";
import Archive from '../archive/archive';
import Search from '../search/search';
import { connect } from 'react-redux';
import {updateSearch} from '../../services/redux/action/action.jsx';
import ClearIcon from '@material-ui/icons/Clear';
import Avatar from '@material-ui/core/Avatar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    marginRight: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginRight: theme.spacing(8),
    },
  },
  keep:{
    width: theme.spacing(4.2),
    marginRight: theme.spacing(1)
  },
  search: {
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: '#F1F3F4',
    "&:hover": {
      backgroundColor: '#F1F3F4',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listIcon:{
    display: 'flex',
    flexDirection: 'column'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1.8, 1.8, 1.8, 1.8),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height:'100%',
    [theme.breakpoints.up('md')]:{
      width: '70ch',
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    "& .MuiDrawer-paperAnchorDockedLeft": {
      borderRight: 'none'
  }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    color:'#646868',
    padding: theme.spacing(0, 1),
    paddingLeft:'16px',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link:{
    textDecoration:'none',
    color: '#707070'
  },
  sideIcon:{
    borderRadius:'20px',
    "&:focus": {
      backgroundColor: '#FEEFC3'
    }
  }
}));

function MiniDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose= () => {
    setOpen(false);
  };
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () =>{ setShowResults(true) ; console.log("click click") }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.keep} src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="" />
          <Typography className={classes.title} variant="h6" noWrap>
            Fundoo
          </Typography>
          <div className={classes.search} onClick={() =>{ setShowResults(true) ; console.log("click click") }} >
            <div className={classes.searchIcon} >
              <SearchIcon />
            </div>

            { showResults ? <div>
            <Link to="/dashboard/search" className={classes.link}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>{props.changeName(e.target.value)}}
            />
            </Link>
            {/* <ClearIcon/> */}
            </div>
             : 
              // <Hidden xsDown>
                <div>
              <Link to="/dashboard/search" className={classes.link}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>{props.changeName(e.target.value)}}
            />
            </Link>
            {/* <ClearIcon/> */}
            </div>
              // </Hidden>
             }

            
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
              <Popover/>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Avatar alt="Remy Sharp" 
                src="https://lh3.googleusercontent.com/ogw/ADGmqu9fD7T16OvzpM2qMPbPNiicoPEFBxuDORVJpthC=s83-c-mo" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
        </div>
        <List
          onMouseEnter={handleDrawerOpen}
          onMouseLeave={handleDrawerClose}>
          <Link to="/dashboard/notes" className={classes.link}>
          <ListItem button key={'Notes'}  className={classes.sideIcon}>
            <ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'Notes'}/>
          </ListItem>
          </Link>
          <ListItem button key={'Remainders'} className={classes.sideIcon}>
            <ListItemIcon><NotificationsNoneOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Remainders'}/>
          </ListItem>
          <ListItem button key={'Editlabels'}  className={classes.sideIcon}>
            <ListItemIcon><EditOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Edit labels'}/>
          </ListItem>
          <Link to="/dashboard/archive" className={classes.link}>
          <ListItem button key={'Archive'}  className={classes.sideIcon}>
            <ListItemIcon>
            <ArchiveOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary={'Archive'}/>
          </ListItem>
          </Link>
          <Link to="/dashboard/trash" className={classes.link}>
          <ListItem button key={'Trash'} className={classes.sideIcon}>
            <ListItemIcon><DeleteOutlineOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Trash'}/>
          </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Switch>
									<ProtectedRoute
									 exact path={"/dashboard"}
										component={Note}
									/>
                  <ProtectedRoute
									 exact path={"/dashboard/notes"}
										component={Note}
									/>
                  <ProtectedRoute
									 exact path={"/dashboard/trash"}
										component={Trash}
									/>
                  <ProtectedRoute
									 exact path={"/dashboard/archive"}
										component={Archive}
									/>
                  <ProtectedRoute
									 exact path={"/dashboard/search"}
										component={Search}
									/>
					</Switch>
        </div>
      </main>
    </div>
  );
}

// const mapStateToProps=(state)=>{
//   return{
//     Text:state.Text
//   }
// }

const mapDispatchToProps=(dispatch)=>{
  
  return{
    changeName:(text)=>{dispatch(updateSearch(text))}
  }
}

export default connect(null,mapDispatchToProps)(MiniDrawer)