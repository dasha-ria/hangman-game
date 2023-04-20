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

      <div className="flex flex-col items-center gap-1">
        <div className="flex gap-1">
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            q
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            w
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            e
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            r
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            t
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            y
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            u
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            i
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            o
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            p
          </kbd>
        </div>
        <div className="flex gap-1 items-center">
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            a
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            s
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            d
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            f
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            g
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            h
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            j
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            k
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            l
          </kbd>
        </div>
        <div className="flex gap-1 items-center">
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            z
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            x
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            c
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            v
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            b
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            n
          </kbd>
          <kbd className="w-5 bg-gray-200 rounded-sm flex justify-center">
            m
          </kbd>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = () => {
  return { props: { randomWord: randomiseWord().toLowerCase() } };
};
