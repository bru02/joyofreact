import React from "react";

function GuessInput({ onGuess, disabled }) {
  let [guess, setGuess] = React.useState("");

  function onSubmit(ev) {
    ev.preventDefault();
    if (guess.length < 5) return;
    onGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(ev) => setGuess(ev.target.value.toUpperCase())}
        required
        disabled={disabled}
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
