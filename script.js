const phrases = [
  "Ayush Mehta",
  "Ayush Mehta - Game Dev Architect",
  "Ayush Mehta - IoT Systems Maker",
  "Ayush Mehta - Creative Coding Explorer",
  "Ayush Mehta - ML & UE5 Builder",
];

const typeElement = document.getElementById("hero-name");
const yearElement = document.getElementById("year");

function typeLoop(index = 0, charIndex = 0, deleting = false) {
  const phrase = phrases[index];

  if (!deleting && charIndex <= phrase.length) {
    typeElement.textContent = phrase.slice(0, charIndex);
    setTimeout(() => typeLoop(index, charIndex + 1, false), 110);
    return;
  }

  if (!deleting && charIndex > phrase.length) {
    setTimeout(() => typeLoop(index, phrase.length - 1, true), 1400);
    return;
  }

  if (deleting && charIndex >= 0) {
    typeElement.textContent = phrase.slice(0, charIndex);
    setTimeout(() => typeLoop(index, charIndex - 1, true), 65);
    return;
  }

  const nextIndex = (index + 1) % phrases.length;
  setTimeout(() => typeLoop(nextIndex, 0, false), 320);
}

if (typeElement) {
  typeLoop();
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
