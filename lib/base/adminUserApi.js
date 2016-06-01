'use strict';

var _ = require('lodash');
var config = require('../config');
var get_options = require('./../common').get_options;
var rp = require('request-promise');

exports.getAdminUser = function (query, headers) {
	return rp(get_options(query, headers, config.base_server + 'admin_user/get'));
};