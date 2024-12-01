// checkForName.test.js
import { checkForName } from "../js/nameChecker";

describe("checkForName", () => {
  beforeEach(() => {
    global.alert = jest.fn();
  });

  test("should welcome valid captain names", () => {
    checkForName("Picard");
    expect(global.alert).toHaveBeenCalledWith("Welcome, Captain!");

    checkForName("Janeway");
    expect(global.alert).toHaveBeenCalledWith("Welcome, Captain!");

    checkForName("Kirk");
    expect(global.alert).toHaveBeenCalledWith("Welcome, Captain!");

    checkForName("Archer");
    expect(global.alert).toHaveBeenCalledWith("Welcome, Captain!");

    checkForName("Georgiou");
    expect(global.alert).toHaveBeenCalledWith("Welcome, Captain!");
  });

  test("should prompt for invalid captain names", () => {
    checkForName("Spock");
    expect(global.alert).toHaveBeenCalledWith("Enter a valid captain name");

    checkForName("Sulu");
    expect(global.alert).toHaveBeenCalledWith("Enter a valid captain name");

    checkForName("McCoy");
    expect(global.alert).toHaveBeenCalledWith("Enter a valid captain name");

    checkForName("");
    expect(global.alert).toHaveBeenCalledWith("Enter a valid captain name");
  });
});
