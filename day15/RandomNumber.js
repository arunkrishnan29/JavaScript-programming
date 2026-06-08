// Generating Random Password

function generateRandomPassword(passlength, lowerCase, upperCase, numbers, symbols) {

    let password = '';
    let allowedchar = '';

    const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Numbers = '1234567890';
    const Symbols = '!@#$%^&*()_+';

    if (passlength <= 0) {
        return 'Password length must be at least 1';
    }

    if (lowerCase) {
        allowedchar += LowerCase;
    }

    if (upperCase) {
        allowedchar += UpperCase;
    }

    if (numbers) {
        allowedchar += Numbers;
    }

    if (symbols) {
        allowedchar += Symbols;
    }

    if (allowedchar.length === 0) {
        return 'Select at least one character type';
    }

    for (let i = 0; i < passlength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[randomIndex];
    }

    return password;
}

const passlength = 9;
const lowerCase = true;
const upperCase = true;
const numbers = true;
const symbols = true;

const password = generateRandomPassword(
    passlength,
    lowerCase,
    upperCase,
    numbers,
    symbols
);

console.log(`Generated Password is = ${password}`);