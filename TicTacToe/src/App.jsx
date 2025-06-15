import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import { Winning_Combinations } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActiveplayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActiveplayer(gameTurns);

  // ✅ Create a copy of the board
  let gameBoard = initialGameBoard.map(row => [...row]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  // ✅ Winner detection
  let winner;
  for (const combination of Winning_Combinations) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
    }
  }

  const hasDraw= gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    // Prevent playing on already filled square or after win
    if (gameBoard[rowIndex][colIndex] !== null || winner) return;

    setGameTurns(prevTurns => {
      const currentPlayer = deriveActiveplayer(prevTurns);
      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}  />}

        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare}  />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
