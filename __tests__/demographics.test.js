import { Demographics } from "../src/demographics";

describe("Demographics", () => {

  let demographics = new Demographics();

  test("should correctly create a demographics object as one of the key values of user object", () => {
    expect(demographics).toBeInstanceOf(Demographics);
  });

});