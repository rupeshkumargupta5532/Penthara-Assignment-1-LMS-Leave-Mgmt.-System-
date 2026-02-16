import api from "./api";

/**
 * Creates a new admin user. (Frontend NOT Implented )
 *
 * @param {Object} data - Admin user data
 * @returns {Promise} Axios response promise
 */
export const createAdmin = (data) => {
  return api.post("/admin/create-user", data);
};

/**
 * Fetches paginated list of users.
 *
 * @param {Number} page - Current page number
 * @param {Number} limit - Number of records per page
 * @returns {Promise} Axios response promise
 */
export const getAllUsers = (page = 1, limit = 10) => {
  return api.get(`/admin/users?page=${page}&limit=${limit}`);
};

/**
 * Searches users by query string. (Frontend NOT Implented )
 *
 * @param {String} query - Search keyword
 * @returns {Promise} Axios response promise
 */
export const searchUsers = (query) => {
  return api.get(`/admin/users/search?q=${query}`);
};

/**
 * Retrieves department-wise leave analytics.
 *
 * @returns {Promise} Axios response promise
 */
export const getDepartmentAnalytics = () => {
  return api.get("/admin/department-analytics");
};

/**
 * Retrieves overall dashboard statistics for admin.
 *
 * @returns {Promise} Axios response promise
 */
export const getDashboard = () => {
  return api.get("/admin/dashboard");
};

/**
 * Retrieves all leave requests (admin view).
 *
 * @returns {Promise} Axios response promise
 */
export const getAllLeaves = () => {
  return api.get("/admin/leaves");
};

/**
 * Updates leave status by admin.
 *
 * @param {String} leaveId - Leave ID
 * @param {Object} data - Updated leave data (status)
 * @returns {Promise} Axios response promise
 */
export const updateLeaveByAdmin = (leaveId, data) => {
  return api.put(`/admin/leave/${leaveId}`, data);
};

/**
 * Filters leaves based on status and department.
 *
 * @param {String} status - Leave status (Pending, Approved, Rejected)
 * @param {String} department - Department name
 * @returns {Promise} Axios response promise
 */
export const filterLeaves = (status, department) => {
  return api.get(
    `/admin/leaves/filter?status=${status}&department=${department}`,
  );
};
