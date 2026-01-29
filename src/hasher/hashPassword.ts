// hasher/hashPassword.ts

let hashPassword: (password: string) => Promise<string>;

if (typeof window === "undefined") {
    // Node.js → dynamically import argon2
    hashPassword = async (password: string) => {
        const argon2 = await import("argon2");
        return argon2.hash(password, {
            type: argon2.argon2id,
            memoryCost: 19456,
            timeCost: 2,
            parallelism: 1,
        });
    };
} else {
    // Browser / React Native → Web Crypto SHA-256
    hashPassword = async (password: string) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        return Array.from(new Uint8Array(hashBuffer))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
    };
}

export { hashPassword };
