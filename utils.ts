// Input validation utility functions

export interface InputData {
    username: string;
    age: number;
    email: string;
}

export function validateUsername(username: string): boolean {
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    return usernameRegex.test(username);
}

export function validateAge(age: number): boolean {
    return age >= 13 && age <= 120;
}

export function validateEmail(email: string): boolean {
    const emailRegex = /^[\w-\.]+@[\w-]+\.com$/;
    return emailRegex.test(email);
}

export function validateInput(data: InputData): boolean {
    return (
        validateUsername(data.username) &&
        validateAge(data.age) &&
        validateEmail(data.email)
    );
}

export function processInput(data: InputData): void {
    if (!validateInput(data)) {
        throw new Error('Invalid input data');
    }
    // Proceed with processing the validated input
    console.log('Processing input:', data);
}
