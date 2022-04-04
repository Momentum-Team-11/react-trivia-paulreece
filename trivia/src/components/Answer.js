const Answer = ({ answer, correct_answer, onClick }) => {
  console.log(answer);
  console.log(correct_answer);
  return (
    <>
      <button
        className="answer"
        onClick={() => {
          onClick();
        }}
      >
        {answer}
      </button>
    </>
  );
};

export { Answer };
