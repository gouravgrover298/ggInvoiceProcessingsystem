import axios from "axios";

const API_URL = "http://localhost:8080";

export const saveInvoice = async (payload) => {
    try {
        return await axios.post(`${API_URL}/invoice`, payload);
    } catch (error) {
        if (error.response) {
            // Axios error with a response
            console.error('Error: ', error.response.data);
            return { error: error.response.data };
        } else {
            // Network error or other error without a response
            console.error('Error: ', error.message);
            return { error: 'Network error or unknown error' };
        }
    }
}

export const getAllInvoices = async () => {
    try {
        return await axios.get(`${API_URL}/invoice`);
    } catch (error) {
        if (error.response) {
            console.error('Error: ', error.response.data);
            return { error: error.response.data };
        } else {
            console.error('Error: ', error.message);
            return { error: 'Network error or unknown error' };
        }
    }
}

export const deleteInvoice = async (id) => {
    try {
        return await axios.delete(`${API_URL}/invoice/${id}`);
    } catch (error) {
        if (error.response) {
            console.error('Error: ', error.response.data);
            return { error: error.response.data };
        } else {
            console.error('Error: ', error.message);
            return { error: 'Network error or unknown error' };
        }
    }
}
