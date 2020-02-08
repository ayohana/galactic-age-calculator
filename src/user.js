import { Demographics } from "../src/demographics";

export class User {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = this.calculateMercuryAge(age);
    this.venusAge = this.calculateVenusAge(age);
    this.marsAge = this.calculateMarsAge(age);
    this.jupiterAge = this.calculateJupiterAge(age);
    this.saturnAge = this.calculateSaturnAge(age);
    this.uranusAge = this.calculateUranusAge(age);
    this.neptuneAge = this.calculateNeptuneAge(age);
    this.demographics = new Demographics();
  }

  calculateMercuryAge(earthAge) {
    return earthAge * 0.24;
  }

  calculateVenusAge(earthAge) {
    return earthAge * 0.62;
  }

  calculateMarsAge(earthAge) {
    return earthAge * 1.88;
  }

  calculateJupiterAge(earthAge) {
    return earthAge * 11.86;
  }

  calculateSaturnAge(earthAge) {
    return earthAge * 0.08;
  }

  calculateUranusAge(earthAge) {
    return earthAge * 0.23;
  }

  calculateNeptuneAge(earthAge) {
    return earthAge * 0.45;
  }

  calculateRemainingLife() {
    let lifeExpectancyOnEarth = this.demographics.lifeExpectancy;
    this.remainingLifeOnEarth = (lifeExpectancyOnEarth - this.earthAge).toFixed(1);
    this.remainingLifeOnMercury = (this.calculateMercuryAge(lifeExpectancyOnEarth) - this.mercuryAge).toFixed(1);
    this.remainingLifeOnVenus = (this.calculateVenusAge(lifeExpectancyOnEarth) - this.venusAge).toFixed(1);
    this.remainingLifeOnMars = (this.calculateMarsAge(lifeExpectancyOnEarth) - this.marsAge).toFixed(1);
    this.remainingLifeOnJupiter = (this.calculateJupiterAge(lifeExpectancyOnEarth) - this.jupiterAge).toFixed(1);
    this.remainingLifeOnSaturn = (this.calculateSaturnAge(lifeExpectancyOnEarth) - this.saturnAge).toFixed(1);
    this.remainingLifeOnUranus = (this.calculateUranusAge(lifeExpectancyOnEarth) - this.uranusAge).toFixed(1);
    this.remainingLifeOnNeptune = (this.calculateNeptuneAge(lifeExpectancyOnEarth) - this.neptuneAge).toFixed(1);
  }

  calculateExtraLife() {
    if (Math.sign(this.remainingLifeOnEarth) === -1) {
      this.extraLifeOnEarth = Math.abs(this.remainingLifeOnEarth);
      this.extraLifeOnMercury = Math.abs(this.remainingLifeOnMercury);
      this.extraLifeOnVenus = Math.abs(this.remainingLifeOnVenus);
      this.extraLifeOnMars = Math.abs(this.remainingLifeOnMars);
      this.extraLifeOnJupiter = Math.abs(this.remainingLifeOnJupiter);
      this.extraLifeOnSaturn = Math.abs(this.remainingLifeOnSaturn);
      this.extraLifeOnUranus = Math.abs(this.remainingLifeOnUranus);
      this.extraLifeOnNeptune = Math.abs(this.remainingLifeOnNeptune);
    } else {
      this.extraLifeOnAnyPlanet = 0;
    }
  }

}