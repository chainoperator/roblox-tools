function safeExecute<T>(fn: () => T): { result?: T; error?: string } {
    try {
        const result = fn();
        return { result };  
    } catch (e) {
        return { error: e instanceof Error ? e.message : 'Unknown error' };  
    }
}

function validatePlayerData(player: any): boolean {
    return player && typeof player.name === 'string' && typeof player.age === 'number';
}

function handlePlayerData(player: any): { success: boolean; message?: string } {
    const validity = validatePlayerData(player);
    if (!validity) {
        return { success: false, message: 'Invalid player data.' };
    }
    return { success: true };
}

export { safeExecute, validatePlayerData, handlePlayerData };