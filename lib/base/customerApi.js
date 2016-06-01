'use strict';

var _ = require('lodash');
var config = require('../config');
var get_options = require('./../common').get_options;
var rp = require('request-promise');

exports.getCustomer = function (query, headers) {
	return rp(get_options(query, headers, config.base_server + 'customer/get'));
};

exports.getCustomerList = function (query, headers) {
	return rp(get_options(query, headers, config.base_server + 'customer/list_all'));
};