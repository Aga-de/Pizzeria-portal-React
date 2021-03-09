import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListIcon from '@material-ui/icons/List';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './Homepage.module.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const demoOrder = [
  {
    type: 'remote',
    id: '1', 
    options: [
      'breakfast ',
      'coffee ',
    ],
  },
  {
    type: 'local',
    id: '2',
    options: [
      'lunch ',
      'pizza ',
    ],
  },
];

const demoCurrent = [
  {
    type: 'reservations', 
    id: '3',
    options: [
      'morning ',
      'evening ',
    ],
  },
  {
    type: 'events', 
    id: '4',
    options: [
      'birthdays ',
      'trainings ',
    ],
  },
];

export default function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={styles.title} variant="h4">
        Managment platform for employees
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            <div className={classes.root}>{'Today\'s orders'}</div>
          </Typography>
          <div className={classes.demo}>
            <List>
              {demoOrder.map ((value, i) => (
                <ListItem key={i}>
                  <ListItemAvatar>
                    <Avatar>
                      <ListIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.type}
                    primaryTypographyProps={{ variant: 'overline' }}
                    secondary={value.options}
                    secondaryTypographyProps={{ variant: 'overline' }} 
                  />      
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>   
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            <div className={classes.root}>{'Current lists'}</div>
          </Typography>
          <div className={classes.demo}>
            <List>
              {demoCurrent.map((value, i) => (
                <ListItem key={i}>
                  <ListItemAvatar>
                    <Avatar>
                      <RestaurantIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.type}
                    primaryTypographyProps={{ variant: 'overline' }}
                    secondary={value.options}
                    secondaryTypographyProps={{ variant: 'overline' }}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>   
      </Grid>
    </div>
  );
}