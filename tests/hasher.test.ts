import { hashPassword, verifyPassword } from "../src";

test("hash and verify password", async () => {
    const pwd = "Str0ngP@ssw0rd!";
    const hash = await hashPassword(pwd);
    const valid = await verifyPassword(pwd, hash);
    expect(valid).toBe(true);
});
test("rejects incorrect password", async () => {
    const pwd = "Str0ngP@ssw0rd!";
    const wrongPwd = "Wr0ngP@ssw0rd!";
    const hash = await hashPassword(pwd);
    const valid = await verifyPassword(wrongPwd, hash);
    expect(valid).toBe(false);
});