import api from "./api";

/**
 * Create admin user
 */
export const createAdmin = (data) => {
  return api.post("/admin/create-user", data);
};

/**
 * Get paginated users
 */
export const getAllUsers = (page = 1, limit = 10) => {
  return api.get(`/admin/users?page=${page}&limit=${limit}`);
};

/**
 * Search users
 */
export const searchUsers = (query) => {
  return api.get(`/admin/users/search?q=${query}`);
};

/**
 * Get department analytics
 */
export const getDepartmentAnalytics = () => {
  return api.get("/admin/department-analytics");
};

/**
 * Get dashboard stats
 */
export const getDashboard = () => {
  return api.get("/admin/dashboard");
};

/**
 * Get all leaves (admin)
 */
export const getAllLeaves = () => {
  return api.get("/admin/leaves");
};

/**
 * Update leave status (admin)
 */
export const updateLeaveByAdmin = (leaveId, data) => {
  return api.put(`/admin/leave/${leaveId}`, data);
};

/**
 * Filter leaves
 */
export const filterLeaves = (status, department) => {
  return api.get(
    `/admin/leaves/filter?status=${status}&department=${department}`
  );
};
