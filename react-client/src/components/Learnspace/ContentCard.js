import { Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


const useStyle = makeStyles((theme) => ({
    root: {
        maxWidth: '345px',
        margin: '10px auto',
        textAlign: 'left',
        background: '#f6f6f6'
    }
}))

const ContentCard = () => {
    const classes = useStyle();
    const [elevation, setElevation] = useState(2)
    
    const handleOnHover = () => {
        setElevation(10)
    }

    const handleonMouseLeave = () => {
        setElevation(2)
    }

    return (
        <Card className={classes.root} elevation={`${elevation}`} onMouseEnter={handleOnHover} onMouseLeave={handleonMouseLeave}>
            <CardHeader 
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
                title="B.P.Lathi"
                subheader="Signals and System"
            />
            <CardContent>
                <Typography variant="body1" color="textPrimary" component="p">
                    <ul>
                        <li>Second Year</li>
                        <li>Jamkar Padho</li>
                    </ul>
                </Typography>
            </CardContent>
            <CardActions>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            </CardActions>
        </Card>)
}

export default ContentCard