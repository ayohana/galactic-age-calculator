import { Demographics } from "../src/demographics";

describe("Demographics", () => {

  let demographics = new Demographics();

  test("should correctly create a demographics object as one of the key values of user object", () => {
    expect(demographics).toBeInstanceOf(Demographics);
  });

  test("should correctly assign true to daily exercise and life expectancy = 75", () => {
    demographics.assignDailyExercise(true);
    expect(demographics.exerciseDaily).toBeTruthy();
    expect(demographics.lifeExpectancy).toEqual(75);
  });

  test("should correctly assign 'Normal' to BMI and life expectancy = 125", () => {
    demographics.assignBMI("Normal");
    expect(demographics.bmi).toEqual("Normal");
    expect(demographics.lifeExpectancy).toEqual(125);
  });

  test("should correctly assign a job title to occupation and life expectancy = 100", () => {
    demographics.assignOccupation("Professional Rock Climber");
    expect(demographics.occupation).toEqual("Professional Rock Climber");
    expect(demographics.lifeExpectancy).toEqual(100);
  });

  test("key-pair values should correctly matches the expected properties", () => {
    expect.objectContaining({
      exerciseDaily: expect.any(Boolean),
      bmi: expect.any(String),
      occupation: expect.any(String),
      lifeExpectancy: expect.any(Number)
    });
  });

});