import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { BrowserRouter, Link } from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  addButton: {
    width: '100%',
    color: 'white',
    textDecoration: 'none',
    border: '1px solid #2c4966',
    backgroundImage: 'linear-gradient(bottom, rgb(56, 92, 127) 0%, rgb(64, 105, 145) 100%)',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'white',
      backgroundImage: 'linear-gradient(bottom, rgb(63, 103, 143) 0%, rgb(75, 124, 173) 100%)',
    }
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {/* myCourts */}
          </Typography>
          <Link to="add" style={{ textDecoration: 'none', marginRight: '20px', padding: '0' }} >
            <Button className={classes.addButton}>Add Court</Button>
          </Link>
          <Link to="find" style={{ textDecoration: 'none', padding: '0' }} >
            <Button className={classes.addButton}>Find Court</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}