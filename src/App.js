import { useState } from "react";
import "./App.css";
import QuestionCard from "./QuestionCard";
import ScoreCard from "./ScoreCard";
import shuffle from "./utilities";
function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [pickedAnswer, setPickedAnswer] = useState(null);

  console.log(correctAnswer);
  console.log(totalScore);

  const pickAnswer = (answer) => {
    if (answer === correctAnswer) setTotalScore((prev) => prev + 1);
    setPickedAnswer(answer);
  };

  // to navigate next question
  const navigateNext = () => {
    let currentQuizIndex = currentQuestionIndex + 1;
    const validQuestionIndex = currentQuestionIndex < quizzes.length - 1;
    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizIndex);
      const question = quizzes[currentQuizIndex];
      setCurrentAnswers(shuffle(question));
      setCorrectAnswer(question.correct_answer);
      // reset picked answer
      setPickedAnswer(null);
    } else {
      setGameOver(true);
    }
  };

  const fetchQuiz = async () => {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple`
    );
    const { results } = await res.json();
    setQuizzes(results);
    setLoaded(true);
    setStartQuiz(true);

    const initialQuestion = results[currentQuestionIndex];
    setCurrentAnswers(shuffle(initialQuestion));
    setCorrectAnswer(initialQuestion.correct_answer);
    console.log(results[0]);
  };

  const resetQuiz = () => {
    setQuizzes(null);
    setStartQuiz(false);
    setCurrentQuestionIndex(0);
    setLoaded(false);
    setCurrentAnswers(null);
    setGameOver(false);
    setTotalScore(0);
    setCorrectAnswer(null);
    setPickedAnswer(null);
  };

  return (
    <div className="App">
      <h2 className="appHeading">Welcome to computer Quiz Application</h2>
      <div className="appContainer">
        {!startQuiz && (
          <div className="startQuiz">
            <button onClick={fetchQuiz} className="startQuizBtn">
              Start Quiz
            </button>
          </div>
        )}
        {loaded && !gameOver && (
          <QuestionCard
            quiz={quizzes[currentQuestionIndex]}
            currentAnswers={currentAnswers}
            quizzes={quizzes}
            currentQuestionIndex={currentQuestionIndex}
            navigateNext={navigateNext}
            pickAnswer={pickAnswer}
            correctAnswer={correctAnswer}
            pickedAnswer={pickedAnswer}
          />
        )}
        {gameOver && (
          <ScoreCard totalScore={totalScore} resetQuiz={resetQuiz} />
        )}
      </div>
    </div>
  );
}

export default App;
