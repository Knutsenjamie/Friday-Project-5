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

  divideAgeMars () {
    this.marscon /= 1.88;
    return (this.marscon);
  }

  divideAgeJupi () {
    this.jupitercon /= 11.86;
    return (this.jupitercon);
  }

}