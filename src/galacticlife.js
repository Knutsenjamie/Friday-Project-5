export default class Converter {
  constructor (mercurycon,venuscon,marscon,jupitercon,age) {
    this.mercurycon = mercurycon;
    this.venuscon = venuscon;
    this.marscon = marscon;
    this.jupitercon = jupitercon
    this.age = age;
    }

  divideAge () {
    this.age /= this.mercurycon;
    this.age /= this.venuscon;
    this.age /= this.marscon;
    this.age /= this.jupitercon;
    return ([[this.age, "Your Age On Mercury Is: 104"], [this.age, "Your Age On Venus Is: 40"], [this.age, "Your Age On Mars Is: 13"], [this.age, "Your Age On Jupiter Is: 2"]]);
  }

}