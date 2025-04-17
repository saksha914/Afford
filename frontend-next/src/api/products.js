import axios from '../middleware/axios';
import { API_ENDPOINTS } from '../constants/api';

export const getFeaturedProducts = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.PRODUCTS.FEATURED);
        return response.data;
    } catch (error) {
        throw error;
    }
};
