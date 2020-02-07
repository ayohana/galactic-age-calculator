import { User } from "../src/user";
import { Demographics } from "../src/demographics";

describe("User", () => {
  
  let inputAge;
  let user;

  beforeEach(() => {
    inputAge = 25;
    user = new User(inputAge);
  });

  test("should correctly create a user object with their Earth age", () => {
    expect(user).toBeInstanceOf(User);
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

  test("should correctly return user's age in Saturn years", () => {
    user.calculateSaturnAge();
    expect(user.saturnAge).toEqual(2);
  });

  test("should correctly return user's age in Uranus years", () => {
    user.calculateUranusAge();
    expect(user.uranusAge).toEqual(5.75);
  });

  test("should correctly return user's age in Neptune years", () => {
    user.calculateNeptuneAge();
    expect(user.neptuneAge).toEqual(11.25);
  });

  test("should correctly create a demographics object as one of the key values of user object", () => {
    expect(user.demographics).toBeInstanceOf(Demographics);
  });

});