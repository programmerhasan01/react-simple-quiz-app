import { useState } from "react";
import "./App.css";
import QuestionCard from "./QuestionCard";
function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const fetchQuiz = async () => {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple`
    );
    const { results } = await res.json();
    setQuizzes(results);
    setLoaded(true);
    setStartQuiz(true);
    console.log(results[0]);
  };

  return (
    <div className="App">
      <div className="appContainer">
        {!startQuiz && (
          <div className="startQuiz">
            <button onClick={fetchQuiz} className="startQuizBtn">
              Start Quiz
            </button>
          </div>
        )}
        {loaded && <QuestionCard quiz={quizzes[currentQuestionIndex]} />}
      </div>
    </div>
  );
}

export default App;
