export class User {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = this.calculateMercuryAge();
  }

  calculateMercuryAge() {
    return this.earthAge * 0.24;
  }
};