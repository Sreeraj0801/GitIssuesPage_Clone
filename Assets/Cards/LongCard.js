import React from "react";
import "./LongCard.css";

function LongCard() {
  return (
    <div class="card">
      <div>
        <p className="card-header">👋 Want to contribute to git/hub ?</p>
      </div>
      <p id="cardBody">
        If you have a bug or an idea, read the <a>contributing guidelines</a>{" "}
        before opening an issue.
      </p>
    </div>
  );
}

export default LongCard;
