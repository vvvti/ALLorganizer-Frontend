import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
  Route,
  useRouteMatch,
  Switch
} from "react-router-dom";
import {Analyses} from '../pages/Analyses/Analyses';
import {DashboardGrid} from '../DaschboardGrid/DashboardGrid';
import {StyledLink} from './DaschboardDrawer.styled';
import {Surgeries} from '../DaschboardPages/Surgeries/Surgeries';


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      zIndex: 0

    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

export const DashboardDrawer = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  return (
  
    <div className={classes.root}>
      <CssBaseline />      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {/* {['Analityka', 'Zabiegi', 'Bilans płynów', 'Apteka'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
            <StyledLink to={`${url}`}>
              <ListItem button>              
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText>Analityka</ListItemText>              
              </ListItem>
            </StyledLink>
            <StyledLink to={`${url}/surgeries`}>
              <ListItem button>              
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText>Zabiegi</ListItemText>              
              </ListItem>
            </StyledLink>
            
        </List>
        <Divider />
        <List>
          {['Morfologia', 'CRP', 'Mocz', 'Biochemia'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={path}>
            <DashboardGrid />
          </Route>
          <Route exact path={`${path}/cbc`}>
            <Analyses />
          </Route>
          <Route exact path={`${path}/surgeries`}>
            <Surgeries />
          </Route>
        </Switch>
      </main>
    </div>
  
  );
}