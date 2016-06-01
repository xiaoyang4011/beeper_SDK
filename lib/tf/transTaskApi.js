'use strict';

var _ = require('lodash');
var config = require('../config');
var get_options = require('./../common').get_options;
var rp = require('request-promise');

/**
 * 获取任务列表
 * @param query
 * @param headers
 * @returns {Promise}
 */
exports.getTaskList = function (query, headers) {
	return rp(get_options(query, headers, config.tf_server + 'task/list'));
};

/**
 * 获取任务详情
 * @param query
 * @param headers
 * @returns {Promise}
 */
exports.getTaskDetail = function (query, headers) {
	return rp(get_options(query, headers, config.tf_server + 'task/detail'));
};