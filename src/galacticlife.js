export default class Converter {
  constructor (mercurycon,venuscon,marscon,jupitercon) {
    this.mercurycon = mercurycon
    this.venuscon = venuscon
    this.marscon = marscon
    this.jupitercon = jupitercon
}

  divideAgeMerc () {
    this.mercurycon /= 0.24;
    return (this.mercurycon);
  }

  divideAgeVenus () {
    this.venuscon /= 0.62;
    return (this.venuscon);
  }

}