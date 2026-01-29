# 🔐 secure-password-kit

**secure-password-kit** is a modern, opinionated, all-in-one password security toolkit for JavaScript and TypeScript applications.

It helps developers **generate**, **validate**, **score**, **hash**, and **verify** passwords securely using industry best practices and safe defaults.

---

## ✨ Features

* 🔒 Cryptographically secure password generation  
* ✅ Password strength validation with clear feedback  
* 📊 Entropy-based password scoring  
* 🧂 Secure password hashing using **Argon2id** (Node/browser only)  
* 🔍 Safe password verification (Node/browser only)  
* 🧠 Opinionated, security-first defaults  
* 🧩 TypeScript-first with full type definitions  
* 🌳 Tree-shakable, modern ESM/CJS support  
* 🌐 Cross-environment support:  
  - Node.js ✅  
  - Browser / React ✅  
  - React Native ⚠️ (password hashing not supported on-device)

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

## 🌍 Environment Support

| Feature                  | Node.js | Browser / React | React Native |
|---------------------------|---------|----------------|--------------|
| `generatePassword`        | ✅      | ✅              | ✅ (requires `react-native-get-random-values`) |
| `scorePassword`           | ✅      | ✅              | ✅           |
| `validatePassword`        | ✅      | ✅              | ✅           |
| `hashPassword` / `verifyPassword` | ✅ | ✅              | ❌ backend-only |

> **React Native setup for `generatePassword`**:  
> 1. Install the polyfill:  
> ```bash
> npm install react-native-get-random-values
> ```  
> 2. Import it at the top of your entry file:  
> ```ts
> import "react-native-get-random-values";
> ```  

> **Important:** `hashPassword` / `verifyPassword` should always be done on the backend in React Native for security.

---

## 🔑 Password Generation

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

> **Note:** Only supported in Node.js and browser environments. Not supported on-device in React Native.

---

## 🛡 Security Considerations

* Uses **Node.js crypto module** for randomness (Node only)  
* Argon2id hashing with secure defaults  
* Timing-safe password verification  
* Safe defaults to prevent common password attacks  
* For React Native, only password generation, scoring, and validation are supported on-device. Hashing should be done on the backend.

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

