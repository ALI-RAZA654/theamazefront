// THE AMAZE - Frontend API Client
const API_BASE_URL = 'https://theamazebackend-production.up.railway.app/api';

window.API = {
    async request(endpoint, options = {}) {
        const defaultHeaders = {
            'Content-Type': 'application/json',
        };

        const config = {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers
            }
        };

        try {
            const timestamp = new Date().getTime();
            const separator = endpoint.includes('?') ? '&' : '?';
            const url = `${API_BASE_URL}${endpoint}${separator}t=${timestamp}`;
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Transmission Error');
            }

            return data;
        } catch (error) {
            console.error(`API Error [${endpoint}]:`, error);
            throw error;
        }
    },

    get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    },

    post(endpoint, body) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    },

    patch(endpoint, body) {
        return this.request(endpoint, {
            method: 'PATCH',
            body: JSON.stringify(body)
        });
    }
};
