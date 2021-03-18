import { AppBar, Input, makeStyles, Tab, Tabs, Toolbar, Typography, Popover, Button, Paper, Container } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import Filters from './Filters'
import ContentCard from './ContentCard'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      
    },
    paper: {
        background: 'white',
        color: 'black',
        '& .MuiPaper-root': {
                borderRadius: '50px',
                flexGrow: 1,
                margin: '0 25px',
                background: '#f6f6f6',
            },
        }
  }));  

  const Learnspace = () => {
    const classes = useStyles();
    const [value, setValue ] = useState('');
    const [anchorE1, setAnchorE1] = useState(null);

    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
        console.log(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorE1(null);
    }

    const open = Boolean(anchorE1);

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar className={classes.paper}>
                <Typography>Back to CollegeSpace</Typography>
                <SearchBar
                    value={value}
                />
                <Button onClick={handleClick}>
                    <TuneIcon />
                </Button>
                <Popover
                    open={open}
                    anchorE1={anchorE1}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                >
                        <Paper style={{ padding: '20px', background: '#f6f6f6', maxWidth: '900px'}} >
                            <Filters />
                        </Paper>
                </Popover>
                </Toolbar>
            </AppBar>
            <ContentCard />
        </div>
    )
}

export default Learnspace;