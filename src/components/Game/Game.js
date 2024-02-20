import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // State to manage the input value
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function handleSubmitGuess(tentativeGuess) {
    //setGuesses([...guesses, tentativeGuess]);

    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("loser");
    }
  }

  console.log("guesses length GAME:", guesses.length);

  return (
    <div className="game-wrapper">
      <div className="guess-results"></div>
      {status === "won" && <WonBanner guesses={guesses} />}
      {status === "loser" && <LostBanner answer={answer} />}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />
    </div>
  );
}

export default Game;
