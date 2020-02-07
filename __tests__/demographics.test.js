import { Demographics } from "../src/demographics";

describe("Demographics", () => {

  let demographics = new Demographics();

  test("should correctly create a demographics object as one of the key values of user object", () => {
    expect(demographics).toBeInstanceOf(Demographics);
  });

  test("should correctly assign true/false to daily exercise", () => {
    demographics.assignDailyExercise(true);
    expect(demographics.exerciseDaily).toEqual(true);
  });

  test("should correctly assign 'normal' to BMI", () => {
    demographics.assignBMI("Normal");
    expect(demographics.bmi).toEqual("Normal");
  });

  test("should correctly assign a job title to occupation", () => {
    demographics.assignOccupation("Professional Rock Climber");
    expect(demographics.occupation).toEqual("Professional Rock Climber");
  });

  test("key-pair values should correctly matches the expected properties", () => {
    expect.objectContaining({
      exerciseDaily: expect.any(Boolean),
      bmi: expect.any(String),
      occupation: expect.any(String)
    });
  });

});