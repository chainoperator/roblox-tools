type User = { id: string; name: string; email: string; isActive: boolean; };

type UserService = {
    addUser: (user: User) => Promise<User>;
    getUser: (id: string) => Promise<User | null>;
    updateUser: (id: string, user: Partial<User>) => Promise<User | null>;
    deleteUser: (id: string) => Promise<boolean>;
};

/**
 * User service implementation for managing users.
 * Provides methods to add, get, update, and delete users.
 */
const userService: UserService = {
    async addUser(user) {
        // Simulate adding user logic
        console.log('User added:', user);
        return user;
    },
    async getUser(id) {
        // Simulate fetching user logic
        console.log('Fetching user with id:', id);
        return { id, name: 'John Doe', email: 'john@example.com', isActive: true };
    },
    async updateUser(id, user) {
        // Simulate user update logic
        console.log('Updating user with id:', id, 'with data:', user);
        return { id, ...user }; // Merge with existing data
    },
    async deleteUser(id) {
        // Simulate delete user logic
        console.log('Deleting user with id:', id);
        return true; // Indicate success
    },
};

export default userService;