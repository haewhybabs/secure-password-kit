type Result = {
    valid: boolean;
    score: number;
    issues: string[];
};

export function validatePassword(password: string): Result {
    const issues: string[] = [];

    if (password.length < 12) issues.push("Password must be at least 12 characters");
    if (!/[A-Z]/.test(password)) issues.push("Missing uppercase letter");
    if (!/[a-z]/.test(password)) issues.push("Missing lowercase letter");
    if (!/\d/.test(password)) issues.push("Missing number");
    if (!/[^a-zA-Z0-9]/.test(password)) issues.push("Missing symbol");

    const score = Math.max(0, 5 - issues.length);

    return {
        valid: issues.length === 0,
        score,
        issues
    };
}
