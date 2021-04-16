export default class Converter {
  constructor (mercury,venus,mars,jupiter) {
    this.mercury = mercury
    this.venus = venus
    this.mars = mars
    this.jupiter = jupiter
}

  addAge () {
    this.mercury += 25;
    this.venus += 25;
    this.mars += 25;
    this.jupiter += 25;
    return (this.venus);
  }
}