import axios from 'axios';

// Instance de lien avec l'URL de base
const api = axios.create({
    baseURL: "http://localhost:8000"
});

export default api;