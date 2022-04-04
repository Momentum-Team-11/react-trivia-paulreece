import "./App.css";
import { TriviaCategories } from "./components/TriviaCategories";

function App() {
  return (
    <>
      <div className="headers">
        <h1 className="title">Trivia!</h1>
        <h2>
          <img
            src={require("./italian-chef-kiss-emoji.png")}
            alt="This is the emoji of a chef kiss."
          ></img>
          The <em>Tastiest</em> Trivia Treats on the Web!
          <img
            src={require("./italian-chef-kiss-emoji.png")}
            alt="This is the emoji of a chef kiss."
          ></img>
        </h2>
      </div>
      <TriviaCategories />
    </>
  );
}

export default App;
