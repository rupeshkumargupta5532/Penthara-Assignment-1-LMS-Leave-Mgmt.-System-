import axios from "axios";

/**
 * Axios API Instance
 *
 * Base configuration for all HTTP requests.
 *
 * Configuration:
 * - baseURL: Backend API base URL
 * - withCredentials: Enables cookie-based authentication
 * - JSON content type headers
 *
 * Used across all service modules.
 */
const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
