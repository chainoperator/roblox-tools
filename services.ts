type UserInput = {username: string, age: number};

declare function isValidUsername(username: string): boolean {
    return /^[a-zA-Z0-9_]{3,16}$/.test(username);
}

declare function isValidAge(age: number): boolean {
    return Number.isInteger(age) && age >= 13 && age <= 120;
}

function processUserInput(input: UserInput): string {
    if (!isValidUsername(input.username)) {
        throw new Error('Invalid username: must be 3-16 chars and alphanumeric.');
    }
    if (!isValidAge(input.age)) {
        throw new Error('Invalid age: must be an integer between 13 and 120.');
    }
    return `User ${input.username}, age ${input.age}, processed successfully.`;
}

function mainLoop(inputs: UserInput[]): void {
    inputs.forEach(input => {
        try {
            const result = processUserInput(input);
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    });
}

const userInputs: UserInput[] = [
    {username: 'Alice123', age: 25},
    {username: 'Bob', age: 15},
    {username: 'Caty!', age: 30},
    {username: 'JohnDoe', age: -5},
];

mainLoop(userInputs);