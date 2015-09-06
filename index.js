'use strict';
module.exports = function (value) {
	if (value === 'false') {
		return false;
	}

	return Boolean(value);
};
