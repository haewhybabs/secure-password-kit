import {
    generatePassword,
    scorePassword,
    hashPassword,
    verifyPassword
} from "./dist/index.js";

const password = generatePassword({ length: 12 });

console.log("Generated:", password);

const score = scorePassword(password);
console.log("Score:", score);

const hash = await hashPassword(password);
console.log("Hash:", hash);

const ok = await verifyPassword(password, hash);
console.log("Verify:", ok);