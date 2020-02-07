export class Demographics {
  constructor() {
    this.exerciseDaily;
    this.bmi;
    this.occupation;
    this.lifeExpectancy = 0;
  }

  assignDailyExercise(boolean) {
    this.exerciseDaily = boolean;
    boolean ? this.lifeExpectancy += 75 : this.lifeExpectancy += 10;
  }

  assignBMI(limitLevel) {
    this.bmi = limitLevel;
    if (limitLevel === "Normal") {
      this.lifeExpectancy += 50;
    } else {
      this.lifeExpectancy += 10;
    }
  }

  assignOccupation(jobTitle) {
    this.occupation = jobTitle;
    if (jobTitle === "Professional Rock Climber") {
      this.lifeExpectancy -= 25;
    } else {
      this.lifeExpectancy += 25;
    }
  }

}