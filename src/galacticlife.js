export default class Converter {
  constructor (mercurycon,venuscon,marscon,jupitercon) {
    this.mercurycon = mercurycon
    this.venuscon = venuscon
    this.marscon = marscon
    this.jupitercon = jupitercon
}

  divideAge () {
    this.mercurycon /= 0.24;
    return (this.mercurycon);
  }
}