/**
 * Formats a date string into a readable locale date format.
 *
 * @param {String} dateString - ISO date string
 * @returns {String} Formatted date string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
