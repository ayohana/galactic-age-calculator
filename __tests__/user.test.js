import { User } from "../src/user";
import { Demographics } from "../src/demographics";

describe("User", () => {
  
  let inputAge;
  let user;
  let anotherUser;

  beforeEach(() => {
    inputAge = 25;
    user = new User(inputAge);
    user.demographics.assignDailyExercise(true);
    user.demographics.assignBMI("Normal");
    user.demographics.assignOccupation("Professional Rock Climber");
  });

  test("should correctly create a user object with their Earth age", () => {
    expect(user).toBeInstanceOf(User);
    expect(user.earthAge).toEqual(25);
  });

  test("should correctly return user's age in Mercury years", () => {
    expect(user.mercuryAge).toEqual(6);
  });

  test("should correctly return user's age in Venus years", () => {
    expect(user.venusAge).toEqual(15.5);
  });

  test("should correctly return user's age in Mars years", () => {
    expect(user.marsAge).toEqual(47);
  });

  test("should correctly return user's age in Jupiter years", () => {
    expect(user.jupiterAge).toEqual(296.5);
  });

  test("should correctly return user's age in Saturn years", () => {
    expect(user.saturnAge).toEqual(2);
  });

  test("should correctly return user's age in Uranus years", () => {
    expect(user.uranusAge).toEqual(5.75);
  });

  test("should correctly return user's age in Neptune years", () => {
    expect(user.neptuneAge).toEqual(11.25);
  });

  test("should correctly create a demographics object as one of the key values of user object", () => {
    expect(user.demographics).toBeInstanceOf(Demographics);
  });

  test("should correctly return remaining years of user's life expectancy on each planet", () => {
    user.calculateRemainingLife();
    expect(user.remainingLifeOnEarth).toEqual("75.0");
    expect(user.remainingLifeOnMercury).toEqual("18.0");
    expect(user.remainingLifeOnVenus).toEqual("46.5");
    expect(user.remainingLifeOnMars).toEqual("141.0");
    expect(user.remainingLifeOnJupiter).toEqual("889.5");
    expect(user.remainingLifeOnSaturn).toEqual("6.0");
    expect(user.remainingLifeOnUranus).toEqual("17.3");
    expect(user.remainingLifeOnNeptune).toEqual("33.8");
  });

  test("otherwise should correctly return number of years surpassing life expectancy", () => {
    anotherUser = new User(105);
    anotherUser.demographics.assignDailyExercise(true);
    anotherUser.demographics.assignBMI("Normal");
    anotherUser.demographics.assignOccupation("Professional Rock Climber");
    anotherUser.calculateRemainingLife();
    anotherUser.calculateExtraLife();
    expect(anotherUser.extraLifeOnEarth).toEqual(5);
    expect(anotherUser.extraLifeOnMercury).toEqual(1.2);
    expect(anotherUser.extraLifeOnVenus).toEqual(3.1);
    expect(anotherUser.extraLifeOnMars).toEqual(9.4);
    expect(anotherUser.extraLifeOnJupiter).toEqual(59.3);
    expect(anotherUser.extraLifeOnSaturn).toEqual(0.4);
    expect(anotherUser.extraLifeOnUranus).toEqual(1.2);
    expect(anotherUser.extraLifeOnNeptune).toEqual(2.3);
  });

  test.todo("add UI to gather input values");

});