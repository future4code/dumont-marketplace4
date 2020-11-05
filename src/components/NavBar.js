import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Logo from '../img/logo.png';
import styled from 'styled-components';


const Img = styled.img`
max-width: 50px;
border-radius: 3px; 
margin-left: 30px;
`;

const useStyles = makeStyles((theme) => ({

  button: {
    backgroundColor: '#41A69C',
    margin: '20px'
  },

  buttons: {
    marginRight:'40px',
  },
    //
    root: {
      background: '#F2C063',
      flexGrow: 1,
      width:"100vw", 

    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        marginLeft:'1%',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight:'5%',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        
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
    inputRoot: {
      color: 'inherit',
      marginRight:'10vw',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  export default function NavBar() {
    const classes = useStyles();
    
  
    return (
      <div className={classes.root}>
        <AppBar className={classes.root} position="static">
          <Toolbar>
          <Img src={Logo}/>
            <Typography className={classes.title} variant="h6" noWrap>
            4Used
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Busca"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            <div className={classes.buttons}>

            <Button variant="outlined" >
              Como funciona
            </Button>

            <Button variant="contained" className={classes.button}>      
              Vender agora!
            </Button>
            </div>
            <Button><AddShoppingCartIcon className={classes.buttons}/></Button>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  