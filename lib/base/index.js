/**
 * Load app configurations
 */
module.exports = _.assign(
	require('./adminUserApi'),
	require('./customerApi')
);