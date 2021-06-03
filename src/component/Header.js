import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

// use some styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
const Header = () => {
  // set usestyle to classes
  const classes = useStyles();
  
  // return the header
    return (
    <div style={{display:'flex' ,justifyContent:'space-between' ,alignItems:'center'}}>
    <List className={classes.root}>
      <ListItem >
        <ListItemAvatar>
          <Link to='/'>
          <Avatar>
          </Avatar>
          </Link>
        </ListItemAvatar>
        <ListItemText primary='Search for countries' secondary="and Discover the planet" />
      </ListItem>
    </List>
    <Box my={2}>
    <Button variant="contained" color="primary" >
      <Link to='/visited' style={{textDecoration:'none' , color:'white'}}>
        show all Visited country
      </Link>
    </Button>
    </Box>
    </div>
  );
}



export default Header
