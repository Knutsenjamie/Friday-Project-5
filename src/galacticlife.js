export default class Converter {
  constructor (mercurycon,venuscon,marscon,jupitercon) {
    this.mercurycon = mercurycon
    this.venuscon = venuscon
    this.marscon = marscon
    this.jupitercon = jupitercon
}

  divideAge () {
    this.mercurycon /= 0.24;
    this.venuscon /= 0.62;
    this.marscon /= 1.88;
    this.jupitercon /= 11.86;
    return ([this.mercurycon, this.venuscon, this.marscon, this.jupitercon]);
  }

}