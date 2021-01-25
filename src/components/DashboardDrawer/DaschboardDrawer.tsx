import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import PollIcon from '@material-ui/icons/Poll';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TimelineIcon from '@material-ui/icons/Timeline';
import PieChartIcon from '@material-ui/icons/PieChart';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import {
  Route,
  useRouteMatch,
  Switch
} from "react-router-dom";
import {DashboardGrid} from '../DaschboardGrid/DashboardGrid';
import {StyledLink} from './DaschboardDrawer.styled';
import {Surgeries} from '../DaschboardPages/Surgeries/Surgeries';
import {Balances} from '../DaschboardPages/Balances/Balances';
import {Medicines} from '../DaschboardPages/Medicines/Medicines';
import {Cbc} from '../DaschboardPages/Cbc/Cbc';
import {Crp} from '../DaschboardPages/Crp/Crp';
import {UrineAnalyses} from '../DaschboardPages/UrineAnalyses/UrineAnalyses';
import {Biochemistry} from '../DaschboardPages/Biochemistry/Biochemistry';


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
            <StyledLink to={`${url}`}>
              <ListItem button>              
                <ListItemIcon><PollIcon /></ListItemIcon>
                <ListItemText>Analityka</ListItemText>              
              </ListItem>
            </StyledLink>
            <StyledLink to={`${url}/surgeries`}>
              <ListItem button>              
                <ListItemIcon><CardGiftcardIcon /></ListItemIcon>
                <ListItemText>Zabiegi</ListItemText>              
              </ListItem>
            </StyledLink>
            <StyledLink to={`${url}/balances`}>
              <ListItem button>              
                <ListItemIcon><LocalDrinkIcon /></ListItemIcon>
                <ListItemText>Bilans Płynów</ListItemText>              
              </ListItem>
            </StyledLink>
            <StyledLink to={`${url}/medicines`}>
              <ListItem button>              
                <ListItemIcon><LocalPharmacyIcon /></ListItemIcon>
                <ListItemText>Lekarstwa</ListItemText>              
              </ListItem>
            </StyledLink>            
        </List>
        <Divider />
        <List>
            <StyledLink to={`${url}/cbc`}>
              <ListItem button>              
                <ListItemIcon><FavoriteBorderIcon /></ListItemIcon>
                <ListItemText>Morfologia</ListItemText>              
              </ListItem>
            </StyledLink>
            <StyledLink to={`${url}/crp`}>
              <ListItem button>              
                <ListItemIcon><TimelineIcon /></ListItemIcon>
                <ListItemText>CRP</ListItemText>              
              </ListItem>
            </StyledLink>
            <StyledLink to={`${url}/urine`}>
              <ListItem button>              
                <ListItemIcon><PieChartIcon /></ListItemIcon>
                <ListItemText>Badanie moczu</ListItemText>              
              </ListItem>
            </StyledLink>
            <StyledLink to={`${url}/biochemistry`}>
              <ListItem button>              
                <ListItemIcon><InvertColorsIcon /></ListItemIcon>
                <ListItemText>Biochemia</ListItemText>              
              </ListItem>
            </StyledLink>          
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={path}>
            <DashboardGrid />
          </Route>
          <Route path={`${path}/cbc`}>
            <Cbc />
          </Route>
          <Route path={`${path}/surgeries`}>
            <Surgeries />
          </Route>
          <Route path={`${path}/balances`}>
            <Balances />
          </Route>
          <Route path={`${path}/medicines`}>
            <Medicines />
          </Route>
          <Route path={`${path}/crp`}>
            <Crp />
          </Route>
          <Route path={`${path}/urine`}>
            <UrineAnalyses />
          </Route>
          <Route exact path={`${path}/biochemistry`}>
            <Biochemistry />
          </Route>
        </Switch>
      </main>
    </div>
  
  );
}