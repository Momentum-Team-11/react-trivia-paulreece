const Category = ({ id, name, onClick }) => {
  return (
    <>
      <div key={id} onClick={onClick}>
        {name}{" "}
      </div>
    </>
  );
};

export { Category };
