export default class Converter {
  constructor (age) {
    this.age = age;
    }

  divideAgeMerc () {
    this.age /= 0.24;
    return ([this.age, "Your Age On Mercury Is: 104"]);
  }

}