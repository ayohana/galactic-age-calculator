import { Demographics } from "../src/demographics";

export class User {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = this.calculateMercuryAge();
    this.venusAge = this.calculateVenusAge();
    this.marsAge = this.calculateMarsAge();
    this.jupiterAge = this.calculateJupiterAge();
    this.saturnAge = this.calculateSaturnAge();
    this.uranusAge = this.calculateUranusAge();
    this.neptuneAge = this.calculateNeptuneAge();
    this.demographics = new Demographics();
  }

  calculateMercuryAge() {
    return this.earthAge * 0.24;
  }

  calculateVenusAge() {
    return this.earthAge * 0.62;
  }

  calculateMarsAge() {
    return this.earthAge * 1.88;
  }

  calculateJupiterAge() {
    return this.earthAge * 11.86;
  }

  calculateSaturnAge() {
    return this.earthAge * 0.08;
  }

  calculateUranusAge() {
    return this.earthAge * 0.23;
  }

  calculateNeptuneAge() {
    return this.earthAge * 0.45;
  }

  calculateRemainingLife() {
    return this.remainingLife = Math.abs(this.demographics.lifeExpectancy - this.earthAge);
  }

}