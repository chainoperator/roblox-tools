export interface UserInput {
    name: string;
    age: number;
    email: string;
}

export function validateInput(input: UserInput): boolean {
    const { name, age, email } = input;
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!nameRegex.test(name)) {
        throw new Error('Invalid name format.');
    }  
    if (age < 0 || age > 120) {
        throw new Error('Age must be between 0 and 120.');
    }
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email format.');
    }
    return true;
}

export function processUserInput(input: UserInput) {
    try {
        if (validateInput(input)) {
            console.log('Input is valid:', input);
        }
    } catch (error) {
        console.error('Input validation error:', error.message);
    }
}