
const GameBoard = ({onSelectSquare, board}) => {
  return (
    <>
    <ol id='game-board'>
        {board.map((row, rowIndex) => (
             <li key={rowIndex}>
               <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                      <button 
                      onClick={() => onSelectSquare(rowIndex,colIndex)}
                      //Button is disabled if the square already has a player symbol
                      disabled={playerSymbol !== null}
                      >
                        {playerSymbol}
                      </button>
                    </li>
                ))}
            </ol>
        </li>
    ))}
    </ol>
    </>
  )
}

export default GameBoard