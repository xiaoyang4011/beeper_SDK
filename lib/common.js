'use strict';

exports.get_options = function(query, headers, uri){
	return {
		method: 'GET',
		uri: uri,
		qs: query || {},
		headers : headers,
		json: true
	};
};

exports.post_options = function(query, uri){
	return {
		method: 'POST',
		uri: uri,
		body: query || {},
		headers : headers,
		json: true
	};
};