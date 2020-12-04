import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { TextField, Grid, Paper, Button, Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Hidden from '@material-ui/core/Hidden';

const DialogComp = (props) => {
  const { classes, gameInfo } = props;
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
        <Paper elevation={1} classes={classes.root}>
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
        <br />
        <Paper>
          <Grid container justify='center' alignItems='center' style={{ textAlign: 'center' }}>
            <Grid item xs={4} sm={4} lg={4} xl={4}>
              <Grid container item direction='column'>
                <Grid><b>ID: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].id}</Grid>
                <Grid><b>full_name: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].full_name}</Grid>
                <Grid><b>name: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].name}</Grid>
                <Grid><b>abbreviation: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].abbreviation}</Grid>
                <Grid><b>city: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].city}</Grid>
                <Grid><b>conference: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].conference}</Grid>
                <Grid><b>division: </b> {""}{gameInfo.hasOwnProperty('home_team') && gameInfo['home_team'].division}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} lg={4} xl={4}>vs</Grid>
            <Grid item xs={4} sm={4} lg={4} xl={4}>
              <Grid container item direction='column'>
                <Grid><b>ID: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].id}</Grid>
                <Grid><b>full_name: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].full_name}</Grid>
                <Grid><b>name: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].name}</Grid>
                <Grid><b>abbreviation: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].abbreviation}</Grid>
                <Grid><b>city: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].city}</Grid>
                <Grid><b>conference: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].conference}</Grid>
                <Grid><b>division: </b> {""}{gameInfo.hasOwnProperty('visitor_team') && gameInfo['visitor_team'].division}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary" autoFocus>
          ok
          </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogComp;