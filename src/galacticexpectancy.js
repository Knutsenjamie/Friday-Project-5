export default class Expector {
  constructor (mercuryexpect,venusexpect,marsexpect,jupiterexpect) {
    this.mercuryexpect = mercuryexpect
    this.venusexpect = venusexpect
    this.marsexpect = marsexpect
    this.jupiterexpect = jupiterexpect
  }

  mercLifeExpect () {
    this.mercuryexpect /= 0.24;
    return (this.mercuryexpect -= 78.54);
  }

  venusLifeExpect () {
    this.venusexpect /= 0.62;
    return (this.venusexpect -= 78.54);
  }

  marsLifeExpect () {
    this.marsexpect /= 1.88;
    return ([this.marsexpect -= 78.54, "Sorry, you'd already be dead!"]);
  }

  jupiterLifeExpect () {
    this.jupiterexpect /= 11.86;
    return ([this.jupiterexpect -= 78.54, "Sorry, you'd already be dead!"]);
  }
}