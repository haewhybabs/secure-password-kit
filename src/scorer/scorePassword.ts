export function scorePassword(password: string) {
    let charsetSize = 0;

    if (/[a-z]/.test(password)) charsetSize += 26;
    if (/[A-Z]/.test(password)) charsetSize += 26;
    if (/\d/.test(password)) charsetSize += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 32;

    const entropy = Math.log2(Math.pow(charsetSize, password.length));

    return {
        entropy,
        rating:
            entropy < 40 ? "weak" :
                entropy < 60 ? "okay" :
                    entropy < 80 ? "strong" :
                        "very-strong"
    };
}
