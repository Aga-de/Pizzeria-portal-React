import React from 'react';
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

  return (
    <div>
      <Typography className={styles.title} variant="h4">
        Managment platform for employees
      </Typography>
      <div className={styles.main}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} md={6} className={styles.box}>
            <Typography variant="h6">
              {'Today\'s orders'}
            </Typography>
            <div>
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
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} md={6} className={styles.box}>
            <Typography variant="h6">
              {'Current lists'}
            </Typography>
            <div>
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
    </div>
  );
}