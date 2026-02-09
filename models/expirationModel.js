function calculateDays(year, month, day) {
  const today = new Date();
  const expiration = new Date(year, month - 1, day);
  const diff = expiration - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

module.exports = { calculateDays };
