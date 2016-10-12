'use strict';

define([ 'projectWeb' ], function() {

	var rivalWarLayoutServiceModule = angular.module('rivalWarLayoutServiceModule', []);

	rivalWarLayoutServiceModule.factory('rivalWarLayoutService', [ '$rootScope',
			function($rootScope) {
				return {
					fire : function() {

					  $(".requireLoadingText").remove();
						$.AdminLTE.layout.activate();

						$("body").addClass('sidebar-mini');
						$("body").addClass('sidebar-collapse');
						$("body").addClass('skin-blue');
						
						$(".sidebar-menu li a").click(function() {
							$('li .active').removeClass('active');
							$(this).parent().addClass('active');
						});

					}// fire end
				};// return end
			} ]);// .define function end
});
