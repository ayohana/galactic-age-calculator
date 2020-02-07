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
  
});