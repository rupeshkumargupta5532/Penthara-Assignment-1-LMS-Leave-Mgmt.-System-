import api from "./api";

/**
 * Registers a new employee
 */
export const registerUser = (formData) => {
  return api.post("/auth/register", formData);
};

/**
 * Logs in user and stores token
 */
export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response;
};

/**
 * Logs out user
 */
export const logoutUser = () => {
  return api.post("/auth/logout");
};


/**
 * Refresh authentication token
 */
export const refreshToken = () => {
  return api.post("/auth/refresh");
};


/**
 * Get Current User
 */
export const getCurrentUser = () => {
  return api.get("/auth/me");
};
