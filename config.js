import dotenv from 'dotenv';

dotenv.config();

export const env = {
    name: process.env.NAME,
    comment: process.env.COMMENT,
    execDir: process.env.EXEC_DIR,
    icondir: process.env.ICON_DIR,
    categories: process.env.CATEGORIES
};

export function camelCase(text) {
    return text
        .split(' ')
        .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

export function capitalizeWithSpaces(text) {
    return text
        .split(' ')
        .map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}