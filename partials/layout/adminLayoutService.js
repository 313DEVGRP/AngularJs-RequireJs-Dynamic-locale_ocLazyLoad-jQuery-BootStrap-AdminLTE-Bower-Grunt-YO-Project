'use strict';

define([ 'projectWeb' ], function() {

	var adminLayoutServiceModule = angular.module('adminLayoutServiceModule', []);

  adminLayoutServiceModule.factory('adminLayoutService', [ '$rootScope',
			function($rootScope) {
				return {
					fire : function() {

					  var $a = $('body a');

					  $(".requireLoadingText").remove();
            $("#loading").remove();
						$.AdminLTE.layout.activate();

						$("body").addClass('sidebar-mini');
						$("body").addClass('sidebar-collapse');
						$("body").addClass('skin-blue');

            $a.on('click', function (e) {
              var $this = $(this);
              if($this.attr('href') === "#") e.preventDefault();
            });

						$(".sidebar-menu li a").click(function() {
							$('li .active').removeClass('active');
							$(this).parent().addClass('active');
						});

					}// fire end
				};// return end
			} ]);// .define function end
});
