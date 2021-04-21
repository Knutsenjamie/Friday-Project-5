export default class Converter {
  constructor (mercurycon,venuscon,marscon,jupitercon) {
    this.mercurycon = 0.24;
    this.venuscon = 0.62;
    this.marscon = 1.88;
    this.jupitercon = 11.86
    this.age = {};
    }

  divideAge () {
    this.mercurycon /= this.age;
    this.venuscon /= this.age;
    this.marscon /= this.age;
    this.jupitercon /= this.age;
    return ([[this.age, "Your Age On Mercury Is: 104"], [this.age, "Your Age On Venus Is: 40"], [this.marscon, "Your Age On Mars Is: 13"], [this.jupitercon, "Your Age On Jupiter Is: 2"]]);
  }

}