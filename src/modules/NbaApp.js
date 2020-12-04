import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Paper, Button, Typography } from '@material-ui/core';
import ReactTable from 'react-table';
import { withSnackbar } from 'notistack';
import axios from 'axios'
import store from '../store/store';
import DialogComp from './components/DialogComp'
import { fromDateAdded, fromDateRemoved, toDateAdded, toDateRemoved } from '../store/actions';
import { errorHandler, warningHandler } from '../helpers/utility'


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    padding: theme.spacing(4)
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  clearBtn: {
    margin: 10
  },
  VerticalLine: {
    margin: 0,
    padding: 0,
    height: 20,
  },
  eachItem: {
    margin: 5
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#696991'
  }
}));

const NbaApp = props => {
  const classes = useStyles();
  const { enqueueSnackbar } = props;
  const reactTable = useRef();
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [gameInfo, setGameInfo] = React.useState({});
  const [pageInfo, setPageInfo] = React.useState({
    pages: -1,
    page: 1,
    pageSize: 10,
    defaultPageSize: 10
  });
  const [dateState, setDateState] = React.useState({
    fromDate: "2019-12-01", toDate: "2019-12-30"
  })

  /** On page refresh, the entered dates still persist */
  useEffect(() => {
    if (localStorage.getItem('dateObj')) {
      let obj = JSON.parse(localStorage.getItem('dateObj'))
      setDateState({ ...dateState, fromDate: obj.fromDate, toDate: obj.toDate })
    }
    if (localStorage.getItem('popUp')) {
      toOpenInfoTab("", localStorage.getItem('popUpId'))
    }
  }, [])

  useEffect(() => {
    reactTable.current.fireFetchData()
  }, [dateState])

  const handleDates = (e, type) => {
    let { value } = e.target;
    if (type === 'fromDate' && value !== "") {
      store.dispatch(fromDateAdded(value))
    } else {
      store.dispatch(fromDateRemoved(value))
    }

    if (type === 'toDate' && value !== "") {
      store.dispatch(toDateAdded(value))
    } else {
      store.dispatch(toDateRemoved(value))
    }

    setDateState({ ...dateState, [type]: value });
    localStorage.setItem('dateObj', JSON.stringify({ ...dateState, [type]: value }))
  }

  const handleClose = () => {
    setGameInfo([])
    setOpen(false);
    localStorage.removeItem('popUp')
    localStorage.removeItem('popUpId')
  };

  async function getUserAccount(isState) {
    const query = `&page=${isState.page + 1}&per_page=${isState.pageSize}`;
    await axios.get(`/api/v1/games?start_date=${dateState.fromDate}&end_date=${dateState.toDate}${query}`)
      .then((res) => {
        const persons = res.data;
        setData(persons.data);
        if (persons.data.length === 0) {
          warningHandler(enqueueSnackbar, 'No Data Available')
        }
        setPageInfo({ ...pageInfo, pages: persons.meta.total_pages, page: isState.page + 1, pageSize: isState.pageSize });
      }).catch((error) => {
        errorHandler(enqueueSnackbar, 'No Data Available')
        setData([]);
      });
  }

  const toOpenInfoTab = (id) => () => {
    axios.get(`/api/v1/games/${id}`)
      .then((res) => {
        const persons = res.data;
        setGameInfo(persons)
        setOpen(true)
        localStorage.setItem('popUp', true)
        localStorage.setItem('popUpId', id)
      }).catch((error) => {
        setData([]);
      });
  }

  const clearDates = () => {
    let dateState = {
      toDate: "", fromDate: ""
    }
    store.dispatch(fromDateRemoved(""))
    store.dispatch(toDateRemoved(""))
    setDateState({ ...dateState, dateState });
  }

  return (
    <>
      <Paper className={classes.root} elevation='5'>
        <Typography variant='overline' className={classes.heading}>NBA APP</Typography>
      </Paper>
      <Paper className={classes.root} elevation='5'>
        <Grid container justify='flex-start' alignItems='center'>
          <Grid item xs={12} sm={12} lg={3} style={{ margin: 10 }}>
            <TextField
              id="fromdate"
              label="From Date"
              variant='outlined'
              type="date"
              value={dateState.fromDate}
              className={classes.textField}
              onChange={(e) => handleDates(e, 'fromDate')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={3} style={{ margin: 10 }}>
            <TextField
              id="todate"
              label="To Date"
              type="date"
              variant='outlined'
              value={dateState.toDate}
              onChange={(e) => handleDates(e, 'toDate')}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={3}>
            <Button className={classes.clearBtn} size='medium' variant='contained' color='primary' onClick={() => reactTable.current.fireFetchData()}>Search</Button>
            <Button className={classes.clearBtn} size='medium' variant='contained' color='secondary' onClick={clearDates}>Clear Dates</Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.root} elevation='5'>
        <ReactTable
          noDataText="No Data to show!"
          data={data}
          sortable={false}
          defaultPageSize={pageInfo.defaultPageSize}
          style={{ display: "table", tableLayout: "fixed", width: "100%" }}
          manual
          pages={pageInfo.pages}
          ref={reactTable}
          onFetchData={(state) => getUserAccount(state)}
          minRows={0} //to show only data rows and hide empty rows from table
          className="-striped -highlight"
          columns={[
            {
              Header: 'ID',
              id: 'id',
              Cell: ({ original }) => (
                <Button variant='outlined' onClick={() => toOpenInfoTab(original.id)}>{original.id}</Button>
              ),
              className: classes.table
            },
            {
              Header: 'Date',
              id: 'date',
              Cell: ({ original }) => (
                original.date
              ),
              className: classes.table,
            },
            {
              Header: 'Home Team Score',
              accessor: 'home_team_score',
              className: classes.table
            },
            {
              Header: 'Visitor Team Score',
              accessor: 'visitor_team_score',
              className: classes.table
            }
          ]}
        />
      </Paper>
      <DialogComp classes={classes} open={open} handleClose={handleClose} gameInfo={gameInfo} />
    </>
  )
}

export default withSnackbar(NbaApp);