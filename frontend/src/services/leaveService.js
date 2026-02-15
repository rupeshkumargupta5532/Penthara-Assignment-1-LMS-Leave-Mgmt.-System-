import api from "./api";

/**
 * Apply for leave
 */
export const applyLeave = (leaveData) => {
  return api.post("/employee/leave", leaveData);
};

/**
 * Get logged-in user's leaves
 */
export const getMyLeaves = () => {
  return api.get("/employee/leave/my");
};

/**
 * Fetch leave Stats
 */
export const statsUser = () => {
  return api.get("/auth/stats");
};

/**
 * Update leave
 */
export const updateLeave = (leaveId, data) => {
  return api.put(`/employee/leave/${leaveId}`, data);
};

/**
 * Delete leave
 */
export const deleteLeave = (leaveId) => {
  return api.delete(`/employee/leave/${leaveId}`);
};
