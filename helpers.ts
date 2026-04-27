// Helper functions for Roblox tools

/**
 * Merges two tables into one.
 * @param {Record<string, any>} target - The target table.
 * @param {Record<string, any>} source - The source table to merge into the target.
 * @returns {Record<string, any>} - The merged table.
 */
function mergeTables<T extends Record<string, any>, U extends Record<string, any>>(target: T, source: U): T & U {
    return {...target, ...source};
}

/**
 * Retrieves a value from a nested object.
 * @param {Object} obj - The object to traverse.
 * @param {string} path - A dot-separated string path to the desired value.
 * @returns {any} - The value at the specified path or undefined.
 */
function getNestedValue(obj: Record<string, any>, path: string): any {
    return path.split('.').reduce((o, key) => (o || {})[key], obj);
}

/**
 * Creates a formatted string from a template and substitutions.
 * @param {string} template - The template string with placeholders.
 * @param {Record<string, string>} substitutions - Object with keys as placeholders and values as replacements.
 * @returns {string} - The formatted string with substitutions applied.
 */
function formatString(template: string, substitutions: Record<string, string>): string {
    return template.replace(/\{(.*?)\}/g, (match, key) => substitutions[key.trim()] || '');
}

export { mergeTables, getNestedValue, formatString };