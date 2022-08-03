import "./AnswerCard.css";
const AnswerCard = ({ answer, pickAnswer, correctAnswer, pickedAnswer }) => {
  const isRightAnswer = pickedAnswer && answer === correctAnswer;
  const isWrongAnswer =
    pickAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer;
  const correctClass = isRightAnswer ? "correctAnswer" : "";
  const inCorrectClass = isWrongAnswer ? "inCorrectAnswer" : "";
  const disabledCalss = pickedAnswer && "disabledAnswer";
  return (
    <li
      className={`answer ${correctClass} ${inCorrectClass} ${disabledCalss}`}
      onClick={() => pickAnswer(answer)}
    >
      {answer}
    </li>
  );
};

export default AnswerCard;
