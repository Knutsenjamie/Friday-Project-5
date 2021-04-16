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
    return (this.mercuryexpect -= 78.54);
  }

  venusLifeExpect () {
    this.venusexpect -= 25;
    this.venusexpect /= 0.62;
    return (this.venusexpect -= 78.54);
  }
}