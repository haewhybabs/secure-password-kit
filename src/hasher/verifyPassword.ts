// hasher/verifyPassword.ts
import { hashPassword as hashPasswordFallback } from "./hashPassword";

let verifyPassword: (password: string, hash: string) => Promise<boolean>;

if (typeof window === "undefined") {
    // Node.js → dynamic import argon2
    verifyPassword = async (password: string, hash: string) => {
        const argon2 = await import("argon2");
        return argon2.verify(hash, password);
    };
} else {
    // Browser / React Native → use Web Crypto fallback
    verifyPassword = async (password: string, hash: string) => {
        const hashed = await hashPasswordFallback(password);
        return hashed === hash;
    };
}

export { verifyPassword };
