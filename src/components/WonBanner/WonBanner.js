import React from "react";

function WonBanner({ guesses }) {
  console.log("guesses length:", guesses.length);
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </div>
  );
}

export default WonBanner;
