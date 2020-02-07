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

});