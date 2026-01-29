type Options = {
    length?: number;
    uppercase?: boolean;
    numbers?: boolean;
    symbols?: boolean;
    excludeSimilar?: boolean;
};

const CHARSETS = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()-_=+[]{};:,.<>?"
};

export function generatePassword(options: Options = {}): string {
    const {
        length = 16,
        uppercase = true,
        numbers = true,
        symbols = true,
        excludeSimilar = true
    } = options;

    let chars = CHARSETS.lower;
    if (uppercase) chars += CHARSETS.upper;
    if (numbers) chars += CHARSETS.numbers;
    if (symbols) chars += CHARSETS.symbols;

    if (excludeSimilar) {
        chars = chars.replace(/[O0Il1]/g, "");
    }

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    return Array.from(array, n => chars[n % chars.length]).join("");
}
