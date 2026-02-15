import api from "./api";

/**
 * Applies for leave.
 *
 * @param {Object} leaveData - Leave form data
 * @returns {Promise} Axios response promise
 */
export const applyLeave = (leaveData) => {
  return api.post("/employee/leave", leaveData);
};

/**
 * Retrieves logged-in user's leave records.
 *
 * @returns {Promise} Axios response promise
 */
export const getMyLeaves = () => {
  return api.get("/employee/leave/my");
};

/**
 * Fetches leave statistics for logged-in user.
 *
 * @returns {Promise} Axios response promise
 */
export const statsUser = () => {
  return api.get("/auth/stats");
};

/**
 * Updates a leave request (only if pending).
 *
 * @param {String} leaveId - Leave ID
 * @param {Object} data - Updated leave data
 * @returns {Promise} Axios response promise
 */
export const updateLeave = (leaveId, data) => {
  return api.put(`/employee/leave/${leaveId}`, data);
};

/**
 * Deletes a leave request.
 *
 * @param {String} leaveId - Leave ID
 * @returns {Promise} Axios response promise
 */
export const deleteLeave = (leaveId) => {
  return api.delete(`/employee/leave/${leaveId}`);
};
