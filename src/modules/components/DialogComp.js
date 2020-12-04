import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import vsImage from '../assests/images/images.png';
import Hidden from '@material-ui/core/Hidden';

const DialogComp = ({ classes, gameInfo, handleClose, ...props }) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      fullWidth
      maxWidth='md'
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center', background: '#b4b2b2' }}>
        <Typography variant='h6'><i>Game Info for Id : </i>{gameInfo['id']}</Typography>
      </DialogTitle>
      <DialogContent>
        <Paper elevation={5} className={classes.dialogRoot}>
          <Grid container alignItems='center' justify='space-around'>
            <Grid item className={classes.eachItem}>
              <b>Date: </b>
              {" "}
              {gameInfo['date']}
            </Grid>
            <Hidden only={['xs', 'sm']}><hr className={classes.VerticalLine} /></Hidden>
            <Grid item className={classes.eachItem}>
              <b>Status:</b>
              {" "}
              {gameInfo['status']}
            </Grid>
            <Hidden only={['xs', 'sm']}><hr className={classes.VerticalLine} /></Hidden>
            <Grid item className={classes.eachItem}>
              <b>Home Team Score </b>
              {" "}
              {gameInfo['home_team_score']}
            </Grid>
            <Hidden only={['xs', 'sm']}><hr className={classes.VerticalLine} /></Hidden>
            <Grid item className={classes.eachItem}>
              <b>Visitor Team Score </b>
              {" "}
              {gameInfo['visitor_team_score']}
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={5} className={classes.dialogRoot}>
          <Grid container justify='center' alignItems='center' style={{ textAlign: 'center' }}>
            <Grid item xs={4} sm={4} lg={4} xl={4} >
              <Grid container item direction='column' justify='space-between' style={{ height: 200 }}>
                <Grid><b>ID: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].id}</Grid>
                <Grid><b>Full Name: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].full_name}</Grid>
                <Grid><b>Name: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].name}</Grid>
                <Grid><b>Abbreviation: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].abbreviation}</Grid>
                <Grid><b>City: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].city}</Grid>
                <Grid><b>Conference: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].conference}</Grid>
                <Grid><b>Division: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].division}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} lg={4} xl={4} ><img src={vsImage} style={{ background: "#fff", height: 100 }} /></Grid>
            <Grid item xs={4} sm={4} lg={4} xl={4}>
              <Grid container item direction='column' justify='space-between' style={{ height: 200 }}>
                <Grid><b>ID: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].id}</Grid>
                <Grid><b>Full Name: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].full_name}</Grid>
                <Grid><b>Name: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].name}</Grid>
                <Grid><b>Abbreviation: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].abbreviation}</Grid>
                <Grid><b>City: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].city}</Grid>
                <Grid><b>Conference: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].conference}</Grid>
                <Grid><b>Division: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].division}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          ok
          </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogComp;