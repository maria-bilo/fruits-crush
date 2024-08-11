const ScoreBoard = ({ score }) => {
    return (
      <div className="score-board">
        <h2 className="score-text">Your Scores: </h2>
        <h2 className="score-number"> {score}</h2>
      </div>
    )
  }
  
  export default ScoreBoard;