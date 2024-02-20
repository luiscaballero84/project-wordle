import React from "react";

function GuessInput({ status, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    // Reset input value after submission
    setTentativeGuess("");
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { value } = event.target; // equals to const value = e.target.value (Object destructuring)
    // Filter out non-letter characters using a regular expression
    const newValue = value.replace(/[^A-Za-z]/gi, "");
    setTentativeGuess(newValue.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        title="Please, write a 5 letter word"
        disabled={status !== "running"}
        pattern="[A-Za-z]{5}"
        maxLength={5}
        value={tentativeGuess}
        onChange={handleChange}
        required
      />
    </form>
  );
}

export default GuessInput;
