import { useEffect, useState, useId } from "react";
import axios from "axios";
import React from "react";
import { QuestionList } from "./QuestionList";
import { Score } from "./Score";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { CorrectResult } from "./CorrectResult";
import { Reset } from "./Reset";
import { MyTimer } from "./MyTimer";
// import Confetti from "react-confetti";
// import  'Rick_Astley.png' from "./Rick_Astley.png";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  PinterestIcon,
  RedditIcon,
  TwitterIcon,
} from "react-share";

const TriviaCategories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const divTriviaId = useId();
  const buttonId = useId();
  const [questIndex, setQuestIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [noQuest, setNoQuest] = useState(10);
  const [correctResult, setCorrectResult] = useState(0);

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api_category.php`)
      .then((response) => setCategories(response.data.trivia_categories));
  }, []);

  const reset = () => {
    setSelectedCategory(null);
    setScore(0);
    setCorrectResult(0);
    setNoQuest(10);
    setDifficulty("easy");
  };

  const catReset = () => {
    setScore(0);
    setCorrectResult(0);
    setDifficulty(difficulty);
    setQuestIndex(0);
    setNoQuest(noQuest);
  };
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);
  return (
    <div className="mainPage">
      {selectedCategory && questIndex < noQuest ? (
        <div key={divTriviaId}>
          <h2>{selectedCategory.name}</h2>
          <Menu>
            <MenuButton>
              Select A Difficulty Level <span aria-hidden>▾</span>
            </MenuButton>
            <MenuList>
              <MenuItem name="Easy" onSelect={() => setDifficulty("easy")}>
                Easy
              </MenuItem>
              <MenuItem name="Medium" onSelect={() => setDifficulty("medium")}>
                Medium
              </MenuItem>
              <MenuItem name="Hard" onSelect={() => setDifficulty("hard")}>
                Hard
              </MenuItem>
            </MenuList>
          </Menu>
          <div className="questMenuItem">Difficulty: {difficulty}</div>
          <Menu>
            <MenuButton>
              Select amount of Questions <span aria-hidden>▾</span>
            </MenuButton>
            <MenuList>
              <MenuItem name="ten" onSelect={() => setNoQuest(10)}>
                10
              </MenuItem>
              <MenuItem name="twenty" onSelect={() => setNoQuest(20)}>
                20
              </MenuItem>
              <MenuItem name="thirty" onSelect={() => setNoQuest(30)}>
                30
              </MenuItem>
            </MenuList>
          </Menu>
          <div className="questMenuItem">No. of Questions: {noQuest}</div>
          <Score score={score} />
          <QuestionList
            id={selectedCategory.id}
            questIndex={questIndex}
            setQuestIndex={setQuestIndex}
            setScore={setScore}
            score={score}
            difficulty={difficulty}
            noQuest={noQuest}
            correctResult={correctResult}
            setCorrectResult={setCorrectResult}
            catReset={catReset}
          />
          <div className="navButtons">
            <button key={buttonId} onClick={() => reset()}>
              Back to Category List
            </button>
          </div>
          <MyTimer />
        </div>
      ) : selectedCategory && correctResult >= noQuest / 5 ? (
        <div>
          <h2>Congrats you win!!</h2>
          <CorrectResult correctResult={correctResult} noQuest={noQuest} />
          <Reset catReset={catReset} />
          <img
            className="cornelius"
            src={require("./Don_Cornelius.gif")}
            alt="This is the amazing Host of the show Soul Train"
          ></img>
          <EmailShareButton>
            <EmailIcon />
          </EmailShareButton>
          <FacebookShareButton>
            <FacebookIcon />
          </FacebookShareButton>
          <InstapaperShareButton>
            <InstapaperIcon />
          </InstapaperShareButton>
          <PinterestShareButton>
            <PinterestIcon />
          </PinterestShareButton>
          <RedditShareButton>
            <RedditIcon />
          </RedditShareButton>
          <TwitterShareButton>
            <TwitterIcon />
          </TwitterShareButton>
        </div>
      ) : selectedCategory && correctResult < noQuest / 5 ? (
        <div>
          <h2>You lose! Better Luck Next Time!</h2>
          <CorrectResult correctResult={correctResult} noQuest={noQuest} />
          <Reset catReset={catReset} />
          <img
            className="astley"
            src={require("./Rick_Astley.png")}
            alt="This is the famous 80's singer Rick Astley, commonly used in Rick Rolls"
          ></img>
          <br></br>
          <div>Share on Social Media:</div>
          <EmailShareButton>
            <EmailIcon />
          </EmailShareButton>
          <FacebookShareButton>
            <FacebookIcon />
          </FacebookShareButton>
          <InstapaperShareButton>
            <InstapaperIcon />
          </InstapaperShareButton>
          <PinterestShareButton>
            <PinterestIcon />
          </PinterestShareButton>
          <RedditShareButton>
            <RedditIcon />
          </RedditShareButton>
          <TwitterShareButton>
            <TwitterIcon />
          </TwitterShareButton>
        </div>
      ) : (
        <div className="catMenu">
          <Menu>
            <MenuButton className="startButton">
              Select A Trivia Category <span aria-hidden>▾</span>
            </MenuButton>
            <MenuList className="startMenu">
              {categories.map((category) => (
                <MenuItem
                  key={category.id}
                  name={category.name}
                  id={category.id}
                  onSelect={() => setSelectedCategory(category)}
                >
                  {category.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      )}
    </div>
  );
};
export { TriviaCategories };
