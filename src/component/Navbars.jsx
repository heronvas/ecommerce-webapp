/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {AppBar, Toolbar, makeStyles, withStyles, Button, Box, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import Login from './Register/Login'



const useStyle = makeStyles((theme) => ({
  header:{
    background : '#EEF3F5',
    height: 65
  }, 
  logo:{
      width: 105,
      
  },

  container:{
      color: "#6f706e",
      margin: '0% 5% 0% auto',
      display: 'flex',
      '& > *':{
        marginRight: 10,
        fontSize: 20 
      }
  },
  linker:{
    color: "#6f706e"
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
}))

//create a function that  

const ToolBar = withStyles({
  root:{
    minHeight: 45
  }
})(Toolbar);

export function Navbars(props) {
    const styles = useStyle();

    const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const openDialog = () => {
    setOpen(true)
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={6} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={() => openDialog()}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

    return (
      <AppBar className = {styles.header}>
      <ToolBar>
        <Link to='/'>
        <img className= {styles.logo} src = {props.img}/>
        </Link>
        

        <SearchBar/>
        <div className={styles.container}>
        <div className={styles.sectionDesktop}>
             <IconButton aria-label="show 17 new notifications" color="inherit">
              <Link to= '/cart' className={styles.container}>
              <Badge badgeContent={11} color="secondary">
                <ShoppingBasketRoundedIcon />
              </Badge>
              </Link>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => openDialog()}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={styles.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </div>

        </ToolBar>
        {renderMobileMenu}
      {renderMenu}
      <Login open={open} setOpen={setOpen}/>
    </AppBar>
    
    
    )
}
 