import { generatePassword } from "../src";

test("generates password with default length", () => {
    const pwd = generatePassword();
    expect(pwd.length).toBe(16);
});
