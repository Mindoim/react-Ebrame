export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export function formatName(firstName, lastName) {
    if (!firstName && !lastName) return 'Usuário Anônimo';
    if (!lastName) return firstName;
    return `${firstName} ${lastName}`;
}

export function isEven(number) {
    return number % 2 === 0;
}

export function capitalize(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}