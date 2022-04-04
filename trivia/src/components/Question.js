import { useId, useEffect } from "react";
import { Answer } from "./Answer";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Question = ({
  id,
  correct_answer,
  incorrect_answers,
  question,
  score,
  setScore,
  correctResult,
  setCorrectResult,
  questIndex,
  setQuestIndex,
}) => {
  const winClick = () => {
    alert("Correct!");
    setScore(score + 10);
    setCorrectResult(correctResult + 1);
    setQuestIndex(questIndex + 1);
  };
  const loseClick = () => {
    alert("Incorrect");
    setQuestIndex(questIndex + 1);
  };
  const questId = useId();
  let answers = [
    correct_answer,
    incorrect_answers[0],
    incorrect_answers[1],
    incorrect_answers[2],
  ];
  shuffleArray(answers);
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);
  return (
    <div id={id}>
      <div id={questId}>
        <h4 className="question">{question}</h4>
        <div className="answers">
          <Answer
            answer={answers[0]}
            correct_answer={correct_answer}
            onClick={() => {
              answers[0] === correct_answer ? winClick() : loseClick();
            }}
          />
          <Answer
            answer={answers[1]}
            correct_answer={correct_answer}
            onClick={() => {
              answers[1] === correct_answer ? winClick() : loseClick();
            }}
          />
          <Answer
            answer={answers[2]}
            correct_answer={correct_answer}
            onClick={() => {
              answers[2] === correct_answer ? winClick() : loseClick();
            }}
          />
          <Answer
            answer={answers[3]}
            correct_answer={correct_answer}
            onClick={() => {
              answers[3] === correct_answer ? winClick() : loseClick();
            }}
          />
        </div>
      </div>
    </div>
  );
};
export { Question };
