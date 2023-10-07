import { useEffect, useState, useId } from "react";
import axios from "axios";
import { Question } from "./Question";
import he from "he";

const QuestionList = ({
  id,
  indexes,
  questIndex,
  setScore,
  score,
  difficulty,
  noQuest,
  correctResult,
  setCorrectResult,
  setQuestIndex,
}) => {
  const [questions, setQuestions] = useState([]);
  const questId = useId();
  const [token, setToken] = useState("");
  let indexArray = [];
  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${noQuest}&category=${id}&difficulty=${difficulty}&type=multiple&token=${token}`
      )
      .then((response) => setQuestions(response.data.results));
  }, [id, token, difficulty, noQuest]);
  useEffect(() => {
    axios
      .get("https://opentdb.com/api_token.php?command=request")
      .then((response) => setToken(response.data.token));
  }, []);
  console.log(questions);
  console.log(difficulty);
  return (
    <div>
      {questions.map((question, index) => {
        indexArray.push(index);
        if (
          index === indexArray[questIndex] &&
          indexArray.includes(questIndex)
        ) {
          return (
            <div key={questId}>
              <Question
                key={index}
                question={he.decode(question.question)}
                correct_answer={he.decode(question.correct_answer)}
                incorrect_answers={question.incorrect_answers.map(
                  (incorrect_answer) =>
                    (incorrect_answer = he.decode(incorrect_answer))
                )}
                setScore={setScore}
                score={score}
                correctResult={correctResult}
                setCorrectResult={setCorrectResult}
                questIndex={questIndex}
                setQuestIndex={setQuestIndex}
              />
            </div>
          );
          // } else {
          //   <div>
          //     <h2>Out of Questions</h2>
          //     <CorrectResult correctResult={correctResult} noQuest={noQuest} />
          //     <Reset catReset={catReset}></Reset>
          //   </div>;
        }
        return null;
      })}
    </div>
  );
};

export { QuestionList };
