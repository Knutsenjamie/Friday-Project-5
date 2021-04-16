export default class Expector {
  constructor (mercuryexpect,venusexpect,marsexpect,jupiterexpect) {
    this.mercuryexpect = mercuryexpect
    this.venusexpect = venusexpect
    this.marsexpect = marsexpect
    this.jupiterexpect = jupiterexpect
  }

  mercLifeExpect () {
    this.mercuryexpect -= 25;
    this.mercuryexpect /= 0.24;
    return (this.mercuryexpect);
  }
}