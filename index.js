// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemeanLion = new Fighter("🦁 Nemean Lion", 11, 13);
let round = 1;

while (heracles.isAlive() && nemeanLion.isAlive()) {
  console.log(`Round #${round}`);
  heracles.figth(nemeanLion);
  console.log(
    `${heracles.name} hits ${nemeanLion.name} 💙${nemeanLion.name} : ${nemeanLion.life} `
  );
  nemeanLion.figth(heracles);
  console.log(
    `${nemeanLion.name} hits ${heracles.name} 💙${heracles.name} : ${heracles.life} `
  );
  round += 1;
}

if (heracles.isAlive()) {
  console.log(`🏆: ${heracles.name}`);
  console.log(`💀: ${nemeanLion.name}`);
} else {
  console.log(`🏆: ${nemeanLion.name}`);
  console.log(`💀: ${heracles.name}`);
}
