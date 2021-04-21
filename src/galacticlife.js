export default class Converter {
  constructor (age) {
    this.age = age;
    }

  divideAgeMerc () {
    this.age /= 0.24;
    return ([this.age, "Your Age On Mercury Is: 104"]);
  }

  divideAgeVenus () {
    this.age /= 0.62;
    return ([this.age, "Your Age On Venus Is: 40"]);
  }

  divideAgeMars () {
    this.age /= 1.88;
    return ([this.age, "Your Age On Mars Is: 13"]);
  }

  divideAgeJup () {
    this.age /= 11.86;
    return ([this.age, "Your Age On Jupiter Is: 2"]);
  }
}