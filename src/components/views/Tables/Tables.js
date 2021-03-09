import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const demoContent = [
  {time: '12:00', table1:  null, name1: null, table2:  null, name2: null, table3:  null, name3: null}, 
  {time: '12:30', table1: 'reservation', name1: 'Mrs', table2:  null, name2: null, table3:  null, name3: null},
  {time: '13:00', table1: 'reservation', name1: 'Mrs', table2:  null, name2: null, table3:  null, name3: null}, 
  {time: '13:30', table1: 'reservation', name1: 'Mrs', table2:  null, name2: null, table3:  null, name3: null},
  {time: '14:00', table1:  null, name1: null, table2:  null, name2: null, table3:  null, name3: null}, 
  {time: '14:30', table1:  null, name1: null, table2:  null, name2: null, table3:  null, name3: null},
  {time: '15:00', table1:  null, name1: null, table2:  null, name2: null, table3:  null, name3: null}, 
  {time: '15:30', table1:  null, name1: null, table2:  null, name2: null, table3:  null, name3: null},
  {time: '16:00', table1:  null, name1: null, table2:  'event', name2: 'Mr', table3:  null, name3: null}, 
  {time: '16:30', table1:  null, name1: null, table2:  'event', name2: 'Mr', table3:  null, name3: null},
  {time: '17:00', table1:  null, name1: null, table2:  'event', name2: 'Mr', table3:  null, name3: null}, 
  {time: '17:30', table1:  null, name1: null, table2:  'event', name2: 'Mr', table3:  null, name3: null},
  {time: '18:00', table1:  null, name1: null, table2:  null, name2: null, table3:  null, name3: null}, 
  {time: '18:30', table1:  null, name1: null, table2:  null, name2: null, table3:  null, name3: null},
  {time: '19:00', table1:  null, name1: null, table2:  null, name2: null, table3:  null, name3: null},
  {time: '19:30', table1:  null, name1: null, table2:  null, name2: null, table3:  null, name3: null}, 
  {time: '20:00', table1:  null, name1: null, table2:  null, name2: null, table3:  'reservation', name3: 'AA'},
  {time: '20:30', table1:  null, name1: null, table2:  null, name2: null, table3:  'reservation', name3: 'AA'}, 
  {time: '21:00', table1:  null, name1: null, table2:  null, name2: null, table3:  'reservation', name3: 'AA'},
];

const renderActions = (table, name) => {
  switch (table) {
    case 'reservation':
      return (
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/${name}`}>reservation</Button>
      );
    case 'event':
      return (
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/${name}`}>events</Button>
      );
    default:
      return null;
  }
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 200,
  },
}));


const Tables = () => {

  const classes = useStyles();

  return (
    <Paper className={styles.component}>
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Change date"
          type="datetime-local"
          defaultValue = "2021-03-09T17:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <span className={styles.buttons}>
        <Button component={NavLink} className={styles.btn} to={`/tables/new`}>NEW RESERVATION</Button>
        <Button component={NavLink} className={styles.btn} to={`/tables/events/new`}>NEW EVENT</Button>
      </span>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.time}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell>
                {renderActions(row.table1, row.name1)}
              </TableCell>
              <TableCell>
                {renderActions(row.table2, row.name2)}
              </TableCell>
              <TableCell>
                {renderActions(row.table3, row.name3)}
              </TableCell>
              <TableCell>
                {renderActions(row.name1)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tables;
