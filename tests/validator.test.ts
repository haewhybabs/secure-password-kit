import { validatePassword } from "../src";

test("rejects weak password", () => {
    const result = validatePassword("password");
    expect(result.valid).toBe(false);
});
