const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
    PRODUCTS: {
        BASE: '/api/products',
        FEATURED: '/api/products/featured',
        DETAIL: (id) => `/api/products/${id}`,
        SEARCH: '/api/products/search',
        CATEGORY: (categoryId) => `/api/products/category/${categoryId}`
    },
    CATEGORIES: {
        BASE: '/api/categories',
        LIST: '/api/categories',
        DETAIL: (id) => `/api/categories/${id}`
    },
    CART: {
        BASE: '/api/cart',
        ADD: '/api/cart/add',
        REMOVE: (id) => `/api/cart/remove/${id}`,
        UPDATE: (id) => `/api/cart/update/${id}`,
        CLEAR: '/api/cart/clear'
    },
    AUTH: {
        LOGIN: '/api/auth/login',
        REGISTER: '/api/auth/register',
        LOGOUT: '/api/auth/logout',
        REFRESH: '/api/auth/refresh'
    },
    USER: {
        PROFILE: '/api/user/profile',
        ORDERS: '/api/user/orders',
        ADDRESSES: '/api/user/addresses'
    },
    NEWSLETTER: {
        SUBSCRIBE: '/api/newsletter/subscribe',
        UNSUBSCRIBE: '/api/newsletter/unsubscribe'
    }
};

export const API_HEADERS = {
    JSON: {
        'Content-Type': 'application/json'
    },
    MULTIPART: {
        'Content-Type': 'multipart/form-data'
    }
};

export const API_TIMEOUT = 10000;

export default API_BASE_URL; 