import { User } from "../src/user";

describe("User", () => {
  
  let inputAge;
  let user;

  beforeEach(() => {
    inputAge = 25;
    user = new User(inputAge);
  });

  test("should correctly create a user object with their Earth age", () => {
    expect(user.earthAge).toEqual(25);
  });

  test("should correctly return user's age in Mercury years", () => {
    user.calculateMercuryAge();
    expect(user.mercuryAge).toEqual(6);
  });

  test("should correctly return user's age in Venus years", () => {
    user.calculateVenusAge();
    expect(user.venusAge).toEqual(15.5);
  });

  test("should correctly return user's age in Mars years", () => {
    user.calculateMarsAge();
    expect(user.marsAge).toEqual(47);
  });

  test("should correctly return user's age in Jupiter years", () => {
    user.calculateJupiterAge();
    expect(user.jupiterAge).toEqual(296.5);
  });

});