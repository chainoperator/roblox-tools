function memoize(fn: (...args: any[]) => any) {
    const cache = new Map();
    return function(...args: any[]) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Example of a time-consuming function
function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

// Usage
console.log(memoizedFibonacci(10)); // Output: 55
console.log(memoizedFibonacci(10)); // Cached result: Output: 55

// Performance optimization example
function optimizedSum(array: number[]): number {
    return array.reduce((acc, val) => acc + val, 0);
}

const numbers = Array.from({ length: 1000000 }, (_, i) => i);
console.time('optimizedSum');
optimizedSum(numbers);
console.timeEnd('optimizedSum');