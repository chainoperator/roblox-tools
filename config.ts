interface Config {
    apiUrl: string;
    retryAttempts: number;
    timeout: number;
}

const defaultConfig: Config = {
    apiUrl: 'https://api.roblox.com/',
    retryAttempts: 3,
    timeout: 5000,
};

function validateConfig(config: Partial<Config>): boolean {
    if (typeof config.apiUrl !== 'undefined' && typeof config.apiUrl !== 'string') {
        throw new Error('Invalid apiUrl');
    }
    if (typeof config.retryAttempts !== 'undefined' && typeof config.retryAttempts !== 'number') {
        throw new Error('Invalid retryAttempts');
    }
    if (typeof config.timeout !== 'undefined' && typeof config.timeout !== 'number') {
        throw new Error('Invalid timeout');
    }
    return true;
}

function updateConfig(newConfig: Partial<Config>): Config {
    validateConfig(newConfig);
    return { ...defaultConfig, ...newConfig };
}

export { Config, defaultConfig, updateConfig };