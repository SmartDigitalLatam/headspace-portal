import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//style .
import { Container } from './styles';

//Ícones .
import DashboardIcon from '@material-ui/icons/Dashboard';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//Rotas .
import Dashboard from '../../views/dashboard';
import GraficosEcho1 from '../../views/graficosecho1';
import GraficosEcho2 from '../../views/graficosecho2';
import GraficosEcho3 from '../../views/graficosecho3';
import GraficosEcho4 from '../../views/graficosecho4';
import GraficosClickIo from '../../views/graficosclickio';


import {Switch,Route,Redirect} from 'react-router-dom'
const drawerWidth = 220;



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  toolbar: theme.mixins.toolbar,
}));



export default function ClippedDrawer(url) {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar id='header_menu'>
            <Typography variant="h6" noWrap>
              Buckman - Portal Usina Santa Fé
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem button component="a" href='/dashboard'> 
              <ListItemIcon>
                  <DashboardIcon />
              </ListItemIcon>
              <ListItemText>
                  Dashboard
              </ListItemText>
            </ListItem>

            <ListItem button component="a" href='/graficosecho1'>
              <ListItemIcon>
                  <BarChartIcon />
              </ListItemIcon>
              <ListItemText>
                  Gráficos ECHOWISE 1
              </ListItemText>
            </ListItem>

            <ListItem button component="a" href='/graficosecho2'>
              <ListItemIcon>
                  <BarChartIcon />
              </ListItemIcon>
              <ListItemText>
                  Gráficos ECHOWISE 2
              </ListItemText>
            </ListItem>

            <ListItem button component="a" href='/graficosecho3'>
              <ListItemIcon>
                  <BarChartIcon />
              </ListItemIcon>
              <ListItemText>
                  Gráficos ECHOWISE 3
              </ListItemText>
            </ListItem>

            <ListItem button component="a" href='/graficosecho4'>
              <ListItemIcon>
                  <BarChartIcon />
              </ListItemIcon>
              <ListItemText>
                  Gráficos ECHOWISE 4
              </ListItemText>
            </ListItem>

            <ListItem button component="a" href='/graficosclickio'>
              <ListItemIcon>
                  <BarChartIcon />
              </ListItemIcon>
              <ListItemText>
                  Gráficos ClickIo
              </ListItemText>
            </ListItem>

            
          </List>
        
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Redirect exact from='/' to='/dashboard'/>
            <Route path='/dashboard' render={(props) => <Dashboard data={url.url}/>}/>
            <Route path='/graficosecho1' render={(props) => <GraficosEcho1 data={url.url}/>}/>
            <Route path='/graficosecho2' render={(props) => <GraficosEcho2 data={url.url}/>}/>
            <Route path='/graficosecho3' render={(props) => <GraficosEcho3 data={url.url}/>}/>
            <Route path='/graficosecho4' render={(props) => <GraficosEcho4 data={url.url}/>}/>
            <Route path='/graficosclickio' render={(props) => <GraficosClickIo data={url.url}/>}/>
          </Switch>
        </main>
      </div>
    </Container>
  );
}
