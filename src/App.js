import './App.css';
import Board from './components/Board.tsx';
import Keyboard from './components/Keyboard.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Katherine's Wordle
            </header>
      <body>
      <Board />
      <Keyboard />

      </body>
    </div>
  );
}

export default App;
