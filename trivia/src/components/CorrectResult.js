const CorrectResult = ({ correctResult, noQuest }) => {
  return (
    <>
      <div>
        {" "}
        <h4>
          You got {correctResult} right out of {noQuest} questions.
        </h4>
      </div>
    </>
  );
};

export { CorrectResult };
