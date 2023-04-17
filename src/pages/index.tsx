import { useState } from "react";

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

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white">
      <p>{randomiseWord()}</p>
      <input type="text" className="border border-black"></input>
      <button>Guess</button>
    </div>
  );
}

export const getServerSideProps = () => {
  return { props: { randomWord: randomiseWord() } };
};
