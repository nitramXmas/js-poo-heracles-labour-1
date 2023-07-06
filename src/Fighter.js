/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  figth(defender) {
    let damages = Math.floor(
      Math.random() * this.strength - defender.dexterity
    );
    if (damages < 0) {
      damages = 0;
    }

    defender.life -= damages;

    if (defender.life < 0) {
      defender.life = 0;
    }
  }

  isAlive() {
    let alive = true;
    if (this.life <= 0) {
      alive = false;
    } else {
      alive = true;
    }
    return alive;
  }
}

module.exports = Fighter;
