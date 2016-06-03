/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('projectWeb.view1 module', function() {

		beforeEach(module('projectWeb.view1'));

		describe('view1 controller', function() {
			it('should ....', inject(function($controller) {
				//spec body
				var view1Ctrl = $controller('View1Ctrl');
				expect(view1Ctrl).toBeDefined();
			}));
		});
	});
});