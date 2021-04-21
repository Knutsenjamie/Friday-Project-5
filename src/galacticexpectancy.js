export default class Expector {
  constructor (mercuryexpect,venusexpect,marsexpect,jupiterexpect) {
    this.mercuryexpect = mercuryexpect;
    this.venusexpect = venusexpect;
    this.marsexpect = marsexpect;
    this.jupiterexpect = jupiterexpect;
  }

  lifeExpect () {
    this.mercuryexpect /= 0.24;
    this.venusexpect /= 0.62;
    this.marsexpect /= 1.88;
    this.jupiterexpect /= 11.86;
    return ([[this.mercuryexpect -= 78.54, "You'd still live about 145 more years on Mercury!"], [this.venusexpect -= 78.54, "You'd still live about 8 more years on Venus!"], [this.marsexpect -= 78.54, "-50? Sorry, you'd already be dead!"], [this.jupiterexpect -= 78.54, "-74? Sorry, you'd already be dead!"]]);
  }
}