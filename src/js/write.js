window.addEventListener('load', function() {
  const textElement1 = document.getElementById("text1");
  const textElement2 = document.getElementById("text2");
  const textElement3 = document.getElementById("text3");
  const textElement4 = document.getElementById("text4");

  const texts = [
    "Having completed my first year of a Bachelor's degree in computer",
    "science at the IUT of Fontainebleau, I'm looking for a work-study position for September 2023 to study for a BTS SIO to deepen my knowledge of networking and cyber-security.",
    "In my spare time, I like to do sport, especially street-workout. I'm also a self-taught car reprogrammer. I'm a big fan of the Python language.",
    "During my high school years I had the opportunity to attend events such as LaNuitDuHack (LeHack), where I was able to participate in wargaming with EFRAI students, and to take part in CaptureTheFlag on my own."
  ];

  let textIndex = 0;
  let charIndex = 0;

  function writeText() {
    if (textIndex >= texts.length) {
      return; // Arrêter l'exécution si tous les textes ont été affichés
    }

    if (charIndex <= texts[textIndex].length) {
      switch (textIndex) {
        case 0:
          textElement1.textContent = texts[textIndex].slice(0, charIndex);
          break;
        case 1:
          textElement2.textContent = texts[textIndex].slice(0, charIndex);
          break;
        case 2:
          textElement3.textContent = texts[textIndex].slice(0, charIndex);
          break;
        case 3:
          textElement4.textContent = texts[textIndex].slice(0, charIndex);
          break;
      }
      charIndex++;
    } else {
      charIndex = 0;
      textIndex++;
    }

    setTimeout(writeText, 100);
  }

  writeText();
});
