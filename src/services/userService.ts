import { User, PagedResult } from '@/types/user';

const API_URL = import.meta.env.VITE_API_URL || 'https://localhost:5001';

export const userService = {
    async getAll(): Promise<User[]> {
        const response = await fetch(`${API_URL}/api/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Không thể lấy danh sách users');
        }
        
        return response.json();
    },

    async getPaged(pageNumber: number, pageSize: number): Promise<PagedResult<User>> {
        const response = await fetch(
            `${API_URL}/api/users?pageNumber=${pageNumber}&pageSize=${pageSize}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        
        if (!response.ok) {
            throw new Error('Không thể lấy danh sách users');
        }
        
        return response.json();
    }
};
