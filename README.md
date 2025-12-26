# 🔐 secure-password-kit

**secure-password-kit** is a modern, opinionated, all-in-one password security toolkit for JavaScript and TypeScript applications.

It helps developers **generate**, **validate**, **score**, **hash**, and **verify** passwords securely using industry best practices and safe defaults.

---

## ✨ Features

* 🔒 Cryptographically secure password generation
* ✅ Password strength validation with clear feedback
* 📊 Entropy-based password scoring
* 🧂 Secure password hashing using **Argon2id**
* 🔍 Safe password verification
* 🧠 Opinionated, security-first defaults
* 🧩 TypeScript-first with full type definitions
* 🌳 Tree-shakable, modern ESM/CJS support

---

## 📦 Installation

```bash
npm install secure-password-kit
```

or

```bash
yarn add secure-password-kit
```

---

## 🚀 Quick Start

```ts
import {
  generatePassword,
  validatePassword,
  scorePassword,
  hashPassword,
  verifyPassword
} from "secure-password-kit";
```

---

## 🔑 Password Generation

Generate cryptographically secure passwords.

```ts
const password = generatePassword({
  length: 20,
  uppercase: true,
  numbers: true,
  symbols: true,
  excludeSimilar: true
});

console.log(password);
// Example output: T@7mR^q2!ZxW9hP%Lk3$
```

---

## ✅ Password Validation

Check if a password meets recommended security criteria.

```ts
const result = validatePassword("MyPassword123!");
console.log(result);
/*
{
  valid: true,
  score: 5,
  issues: []
}
*/
```

---

## 📊 Password Scoring

Evaluate password entropy and strength.

```ts
const score = scorePassword("MyPassword123!");
console.log(score);
/*
{
  entropy: 65.7,
  rating: "strong"
}
*/
```

---

## 🧂 Password Hashing & Verification

```ts
const hash = await hashPassword("MyPassword123!");
const isValid = await verifyPassword("MyPassword123!", hash);
console.log(isValid); // true
```

---

## 🛡 Security Considerations

* Uses **Node.js crypto module** for randomness
* Argon2id hashing with secure defaults
* Timing-safe password verification
* Safe defaults to prevent common password attacks

---

## 📖 Documentation & Support

* GitHub Repository: [https://github.com/haewhybabs/secure-password-kit](https://github.com/haewhybabs/secure-password-kit)
* Issues: [https://github.com/haewhybabs/secure-password-kit/issues](https://github.com/haewhybabs/secure-password-kit/issues)

---

## 👤 Authors

* **Ayobami Babalola** – [GitHub](https://github.com/haewhybabs)

---

## 📄 License

[MIT](LICENSE)
