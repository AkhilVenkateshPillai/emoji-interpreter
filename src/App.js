import React, { useState } from "react";
import "./styles.css";

let emojiDictionary = {
  "😀": "Grinning Face",
  "🤣": "ROFL",
  "☺️": "Smiling Face",
  "😐": "Neutral Face",
  "🤥": "Lying Face",
  "😟": "Worried Face"
};

let emojiArrayKeys = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  const inputInterpreter = () => {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
    if (meaning === undefined) {
      return setMeaning("Emoji Unavailable 😟");
    }
  };

  const emojiIdentifier = (item) => {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Emoji Finder</h1>
      <input onChange={inputInterpreter} />
      <p></p>
      <div>
        <h2>{meaning}</h2>
      </div>

      <div>
        {emojiArrayKeys.map((item) => {
          return (
            <span
              onClick={() => {
                emojiIdentifier(item);
              }}
              keys={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
