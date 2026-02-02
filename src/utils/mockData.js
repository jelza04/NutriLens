// Simple mock database using localStorage

const USERS_KEY = 'nutrilens_users';

// Initialize with empty array if not exists
if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify([]));
}

export const mockDB = {
    getUsers: () => {
        return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    },

    registerUser: (userData) => {
        const users = mockDB.getUsers();

        // Check if email exists
        if (users.find(u => u.email === userData.email)) {
            return { success: false, message: 'Email already registered' };
        }

        const newUser = {
            id: Date.now().toString(),
            name: userData.name,
            email: userData.email,
            password: userData.password, // In real app, never store plain text passwords!
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        return { success: true, user: newUser };
    },

    loginUser: (email, password) => {
        const users = mockDB.getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Remove password from returned object
            const { password, ...userWithoutPassword } = user;
            return { success: true, user: userWithoutPassword };
        }

        return { success: false, message: 'Invalid email or password' };
    }
};
