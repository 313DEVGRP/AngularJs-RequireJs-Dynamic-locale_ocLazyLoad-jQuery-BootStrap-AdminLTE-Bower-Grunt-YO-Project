'use strict';

define(['projectWeb'], function () {
	
	var customersServiceModule = angular.module('customersServiceModule', []);
	
	customersServiceModule.factory('customersService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('Customer');
				
				 function jstreeDataTableReload() {
	        		  $('.bs-example-modal-sm').modal('show');
	        		  $('#jstreeTable').dataTable().api().ajax.reload();
	        	  }

					$(function () {

					var jstreeDataTable = $('#jstreeTable').dataTable( {
						"ajax": {
							"url": "partials/layout/contents/DEV/stakeholder/customers/json/customers.json",							
							"dataSrc": "rows"
						},
						"processing": true,
						"responsive": true,
						"paging": true,
						"lengthChange": false,
						"searching": false,
						"ordering": true,
						"info": true,
						"autoWidth": false,
						"columns": [
							{ "data": "cell.0" ,
								"render": function(data, type, row) {
							        return '<img src="partials/layout/contents/DEV/stakeholder/customers/img/'+data+'" width="89" height="46" />';
							    }
							  	
							},
							{ "data": "cell.1" },
							{ "data": "cell.2" },
							{ "data": "cell.3" },
							{ "data": "cell.4" }
							
						]
					} );
					});
					// ==================== jstree DataTables ====================
				
			}//fire end
		};//return end
	}]);//.define function end
});