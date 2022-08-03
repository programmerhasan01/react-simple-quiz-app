import "./ScoreCard.css";
const ScoreCard = ({ totalScore, resetQuiz }) => {
  return (
    <div className="result">
      <h3>Your result below</h3>
      <p>Score : {totalScore}</p>
      <button onClick={resetQuiz} className="resetBtn">
        Reset-QUIZ
      </button>
    </div>
  );
};

export default ScoreCard;
