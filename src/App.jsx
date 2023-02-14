import React, { useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const choices = ["pierre", "papier", "ciseaux"];

  const handleClick = (choice) => {
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNum];

    setUserChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult("Egalité !");
    } else if (
      (choice === "pierre" && computerChoice === "ciseaux") ||
      (choice === "papier" && computerChoice === "pierre") ||
      (choice === "ciseaux" && computerChoice === "papier")
    ) {
      setResult("Vous avez gagné !");
    } else {
      setResult("Vous avez perdu !");
    }
  };

  const backgroundColor = result === "Vous avez gagné !" ? "green" : result === "Vous avez perdu !" ? "red" : "yellow";

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor }}>
      <div>
        <h1>Pierre-Papier-Ciseaux</h1>
        <div>
          <button onClick={() => handleClick("pierre")}>Pierre</button>
          <button onClick={() => handleClick("papier")}>Papier</button>
          <button onClick={() => handleClick("ciseaux")}>Ciseaux</button>
        </div>
        <h2>Votre choix: {userChoice}</h2>
        <h2>Choix de l'ordinateur: {computerChoice}</h2>
        <h1>{result}</h1>
      </div>
    </div>
  );
};

export default App;