import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  return (
    <>
      <GuessResults guesses={guesses}></GuessResults>
      
        <GuessInput
          onGuess={(rawGuess) => {
            const newGuess = checkGuess(rawGuess, answer);
            const newGuesses = [...guesses, newGuess];

            if (rawGuess === answer) setStatus("won");
            else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED)
              setStatus("lost");

            setGuesses(newGuesses);
          }}
          disabled={status !== 'running'}
        ></GuessInput>
      
      {status === "won" && (
        <Banner type="happy">
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guesses.length === 1 ? '1 guess' : `${guesses.length} guesses`}</strong>.
        </Banner>
      )}
      {status === "lost" && (
        <Banner type="sad">
          Sorry, the correct answer is <strong>{answer}</strong>.
        </Banner>
      )}
    </>
  );
}

export default Game;
