import { useEffect, useState } from "react";

const words = [
  "Musical",
  "Planning",
  "Spectacle",
  "Substance",
  "Package",
  "Momentum",
  "Resign",
  "Obedient",
  "Judgment",
  "Exemplary",
  "Prayer",
  "Familiar",
  "Assembly",
  "Exchange",
  "Innocence",
  "Automate",
  "Embark",
  "Genuine",
  "Indulge",
  "Platform",
  "Meditate",
  "Humility",
  "Fiction",
  "Toxicity",
  "Covenant",
  "Heritage",
  "Bookmark",
  "Tolerance",
  "Visibility",
  "Refrain",
  "Blueprint",
  "Outrage",
  "Meridian",
  "Collaborate",
  "Ominous",
  "Platinum",
  "Compassion",
  "Different",
  "Puncture",
  "Associate",
  "Alchemy",
  "Nirvana",
  "Engage",
  "Quarantine",
  "Bravery",
  "Perceive",
  "Plethora",
  "Emulate",
  "Regulate",
  "Forbidden",
  "Resonate",
  "Conceal",
  "Mystery",
  "Zodiac",
  "Oblivion",
  "Envision",
  "Ambition",
  "Commotion",
  "Desolate",
  "Seductive",
  "Revelation",
  "Perennial",
  "Sanctuary",
  "Innovation",
  "Scrutiny",
  "Essential",
  "Ambiguous",
  "Empathy",
  "Euphoria",
  "Benevolent",
  "Elevate",
  "Liberate",
  "Empower",
  "Clairvoyant",
  "Illuminate",
  "Endurance",
  "Conqueror",
  "Existence",
  "Enlighten",
  "Perfection",
  "Manifest",
  "Harmony",
  "Transform",
  "Hypnotize",
  "Revolution",
  "Eccentric",
  "Catastrophe",
  "Flamboyant",
  "Inspire",
  "Phenomenon",
  "Interact",
  "Eternal",
  "Majestic",
  "Synthetic",
  "Infinite",
  "Magnitude",
  "Exhilarate",
  "Bittersweet",
  "Illuminate",
  "Inquisitive",
];

function randomiseWord() {
  const randomIndex = Math.min(
    Math.floor(Math.random() * words.length),
    words.length - 1
  );
  return words[randomIndex];
}

const points = 5;

function renderWord(word, guesses) {
  return word
    .split("")
    .map((char) => {
      if (guesses.includes(char)) {
        return char;
      } else {
        return "_";
      }
    })
    .join(" ");
}

function isWordGuessed(word, guesses) {
  return word.split("").every((char) => guesses.includes(char));
}

function countAttemptsLeft(word, guesses) {
  const maxAttempts = 5;
  const wrongGuesses = guesses.filter((g) => !word.includes(g)).length;

  const attemptsLeft = maxAttempts - wrongGuesses;

  return attemptsLeft;
}

export default function Home({ randomWord }) {
  const [guesses, setGuesses] = useState([]);

  const attemptsLeft = countAttemptsLeft(randomWord, guesses);
  const gameState = (() => {
    if (attemptsLeft <= 0) {
      return "Lost";
    } else if (isWordGuessed(randomWord, guesses)) {
      return "Won";
    } else {
      return "Playing";
    }
  })();

  const message = (() => {
    if (gameState === "Lost") {
      return `You suck :( the answer is ${randomWord}`;
    } else if (gameState === "Won") {
      return "Congrats! You won :)";
    } else {
      return null;
    }
  })();

  useEffect(() => {
    function handleKeyPress(e) {
      if (gameState === "Playing") {
        const keyCode = e.keyCode;
        if (
          (keyCode >= 65 && keyCode <= 90) ||
          (keyCode >= 97 && keyCode <= 122)
        ) {
          const letter = e.key.toLowerCase();
          setGuesses((g) => {
            if (g.includes(letter)) {
              return g;
            } else {
              return [...g, letter];
            }
          });
        }
      }
    }

    document.addEventListener("keypress", handleKeyPress);

    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [gameState]);

  return (
    <div className="h-screen w-screen bg-white text-black">
      {message}

      <p>You have {attemptsLeft} attempts left</p>
      <p>{renderWord(randomWord, guesses)}</p>
      <p>{guesses.join(" ")}</p>
      <img src={`img-${attemptsLeft}.jpg`} className="w-96 h-auto"></img>
    </div>
  );
}

export const getServerSideProps = () => {
  return { props: { randomWord: randomiseWord().toLowerCase() } };
};
