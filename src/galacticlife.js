export default class Converter {
  constructor (mercurycon,venuscon,marscon,jupitercon) {
    this.mercurycon = mercurycon;
    this.venuscon = venuscon;
    this.marscon = marscon;
    this.jupitercon = jupitercon;
    }

  divideAge () {
    this.mercurycon /= 0.24;
    this.venuscon /= 0.62;
    this.marscon /= 1.88;
    this.jupitercon /= 11.86;
    return ([[this.mercurycon, "Your Age On Mercury Is: 104"], [this.venuscon, "Your Age On Venus Is: 40"], [this.marscon, "Your Age On Mars Is: 13"], [this.jupitercon, "Your Age On Jupiter Is: 2"]]);
  }

}