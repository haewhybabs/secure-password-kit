import { generatePassword, validatePassword, hashPassword, verifyPassword } from 'secure-password-kit';

async function testLibrary() {
    // Generate a password
    const password = generatePassword();
    console.log("Generated password:", password);

    // Validate password strength
    const result = validatePassword(password);
    console.log("Validation result:", result);

    // Hash the password
    const hash = await hashPassword(password);
    console.log("Hashed password:", hash);

    // Verify the password
    const isValid = await verifyPassword(password, hash);
    console.log("Verification result:", isValid);
}

testLibrary();
