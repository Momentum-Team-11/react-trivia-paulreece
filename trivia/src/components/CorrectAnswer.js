const CorrectAnswer = ({ correct_answer }) => {
  return (
    <>
      <li onClick={() => alert("You win!")}>{correct_answer}</li>
    </>
  );
};

export { CorrectAnswer };
