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

  test("should correctly return remaining years of user's life expectancy on Earth", () => {
    user.calculateRemainingLife();
    expect(user.remainingLifeOnEarth).toEqual(75);
  });

  test("should correctly return remaining years of user's life expectancy on Mercury", () => {
    user.calculateRemainingLife();
    expect(user.remainingLifeOnMercury).toEqual(18);
  });

  test("should correctly return remaining years of user's life expectancy on Venus", () => {
    user.calculateRemainingLife();
    expect(user.remainingLifeOnVenus).toEqual(46.5);
  });

  test("should correctly return remaining years of user's life expectancy on Mars", () => {
    user.calculateRemainingLife();
    expect(user.remainingLifeOnMars).toEqual(141);
  });

  test("should correctly return remaining years of user's life expectancy on Jupiter", () => {
    user.calculateRemainingLife();
    expect(user.remainingLifeOnJupiter).toEqual(889.5);
  });

  test("should correctly return remaining years of user's life expectancy on Saturn", () => {
    user.calculateRemainingLife();
    expect(user.remainingLifeOnSaturn).toEqual(6);
  });

  test("should correctly return remaining years of user's life expectancy on Uranus", () => {
    user.calculateRemainingLife();
    expect(user.remainingLifeOnUranus).toEqual(17.25);
  });

  test("should correctly return remaining years of user's life expectancy on Neptune", () => {
    user.calculateRemainingLife();
    expect(user.remainingLifeOnNeptune).toEqual(33.75);
  });

  test("otherwise should correctly return number of years surpassing life expectancy", () => {
    anotherUser = new User(105);
    anotherUser.demographics.assignDailyExercise(true);
    anotherUser.demographics.assignBMI("Normal");
    anotherUser.demographics.assignOccupation("Professional Rock Climber");
    anotherUser.calculateRemainingLife();
    expect(anotherUser.remainingLifeOnEarth).toEqual(5);
  });

  test.todo("add UI to gather input values");

});