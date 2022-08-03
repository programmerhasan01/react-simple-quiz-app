import AnswerCard from "./AnswerCard";
import "./QuestionCard.css";
const QuestionCard = ({
  quiz,
  currentAnswers,
  currentQuestionIndex,
  quizzes,
  navigateNext,
  pickAnswer,
  correctAnswer,
  pickedAnswer,
}) => {
  console.log(correctAnswer === pickedAnswer);

  return (
    <div className="questionsContainer">
      <h4>
        Question : ({currentQuestionIndex + 1} / {quizzes.length})
      </h4>
      <h3>Question : {quiz.question}</h3>
      {currentAnswers.map((answer, index) => (
        <AnswerCard
          answer={answer}
          pickAnswer={pickAnswer}
          correctAnswer={correctAnswer}
          pickedAnswer={pickedAnswer}
          key={index}
        />
      ))}
      <button className="navigateNext" onClick={navigateNext}>
        <i className="fa-solid fa-angles-right"></i> Next
      </button>
    </div>
  );
};

export default QuestionCard;
