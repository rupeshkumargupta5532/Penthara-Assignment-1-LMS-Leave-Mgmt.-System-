import api from "./api";

/**
 * Registers a new employee.
 *
 * @param {Object} formData - Registration form data
 * @returns {Promise} Axios response promise
 */
export const registerUser = (formData) => {
  return api.post("/auth/register", formData);
};

/**
 * Logs in a user.
 *
 * @param {Object} credentials - User login credentials
 * @returns {Promise} Axios response containing user data
 */
export const loginUser = async (credentials) => {
  return await api.post("/auth/login", credentials);
};

/**
 * Logs out the currently authenticated user.
 *
 * @returns {Promise} Axios response promise
 */
export const logoutUser = () => {
  return api.post("/auth/logout");
};

/**
 * Refreshes authentication token.
 *
 * @returns {Promise} Axios response promise
 */
export const refreshToken = () => {
  return api.post("/auth/refresh");
};

/**
 * Retrieves currently authenticated user details.
 *
 * @returns {Promise} Axios response promise
 */
export const getCurrentUser = () => {
  return api.get("/auth/me");
};
