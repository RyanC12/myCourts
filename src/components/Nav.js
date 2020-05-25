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
    color: 'white',
    textDecoration: 'none',
  }
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
          <Link to="add">
          <Button className={classes.addButton}>Add Court</Button>
          </Link>
          <Link to="find">
          <Button className={classes.addButton}>Find Court</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}