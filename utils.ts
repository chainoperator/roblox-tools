type InputData = { inputValue: string; };

type ValidationResponse = { isValid: boolean; message: string; };

const validateInput = (data: InputData): ValidationResponse => {
    const { inputValue } = data;
    if (!inputValue) {
        return { isValid: false, message: 'Input cannot be empty' };
    }
    if (inputValue.length < 3) {
        return { isValid: false, message: 'Input must be at least 3 characters long' };
    }
    if (!/^[a-zA-Z0-9]*$/.test(inputValue)) {
        return { isValid: false, message: 'Input can only contain alphanumeric characters' };
    }
    return { isValid: true, message: 'Valid input' };
};

const mainProcessingLoop = (inputDataArray: InputData[]): void => {
    inputDataArray.forEach(data => {
        const validation = validateInput(data);
        if (!validation.isValid) {
            console.error(`Validation failed: ${validation.message}`);
            return;
        }
        console.log(`Processing valid input: ${data.inputValue}`);
        // Process the valid input further here...
    });
};

export { validateInput, mainProcessingLoop };