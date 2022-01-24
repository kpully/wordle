import './App.css';
import Board from './components/Board.tsx';
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@mui/styles';

import FavoriteIcon from '@mui/icons-material/Favorite';





function App() {

  const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 40,
    justifyContent: 'center',
    backgroundColor: 'red',
    fontSize: '40px'
  }
}));
const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.toolbar} position="static"> (FAKE) WORDLE
      </AppBar>
      <Board />
      <BottomNavigation
      >
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />

      </BottomNavigation>
    </div>
  );
}

export default App;
