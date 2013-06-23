'use strict';

/* Filters */

angular.module('sycaFilters', []).
	filter('checkmark', function() { // just a test filter
	  return function(input) {
	    return input ? '\u2713' : '\u2718';
	  };
	}). // the dot here connects the next filter function
	
	filter('truncate', function() {
		return function (text, limit, end) {
	        if (isNaN(limit))
	            limit = 140;

	        if (end === undefined)
	            end = "...";

	        if (text == null || text.length == 0) {
        			return null;
        	}
	        else if (text.length <= limit || text.length - end.length <= limit) {
	            return text;
	        } 
	        else {
	            return String(text).substring(0, limit-end.length) + end;
	        }

	    };

	});

angular.module('testFilters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
