'use strict';

define(
		['projectWeb'
		],
		function() {

			var strutsiBatisModule = angular.module('projectWeb', ['ui.router',
					'oc.lazyLoad'
			]);

			strutsiBatisModule.config(['$ocLazyLoadProvider',
					function($ocLazyLoadProvider) {
						$ocLazyLoadProvider.config({
							jsLoader : requirejs,
							debug : true
						});
					}
			]);

			strutsiBatisModule.controller('strutsiBatisHeaderController', [
					'$scope',
					'$rootScope',
					'$ocLazyLoad',
					'strutsiBatisService',
					'devLayoutService',
					function($scope, $rootScope, $ocLazyLoad,
							strutsiBatisService, devLayoutService) {

						$scope.broadcastGoToHome = function() {
							$rootScope.$broadcast('goToHome');
						};

					}
			]);// strutsiBatisHeaderController.controller

			strutsiBatisModule
					.controller(
							'strutsiBatisController',
							[
									'$scope',
									'$ocLazyLoad',
									function($scope, $ocLazyLoad) {
										$ocLazyLoad
												.load(
														[
																'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
																'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
																'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',

																'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
																'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
																'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

														])
												.then(
														function() {
															// ====================
															// jstree
															// ====================
															$(function() {
																$(
																		"#jsTreeContainer .btn")
																		.click(
																				function() {
																					switch (this.id) {
																						case "add_default":
																						case "add_folder":
																							$(
																									"#demo")
																									.jstree(
																											"create",
																											null,
																											"last",
																											{
																												"attr" : {
																													"rel" : this.id
																															.toString()
																															.replace(
																																	"add_",
																																	"")
																												}
																											});
																							break;
																						case "search":
																							$(
																									"#demo")
																									.jstree(
																											"search",
																											document
																													.getElementById("text").value);
																							$(
																									'#jstreeTable')
																									.DataTable()
																									.column(
																											6)
																									.search(
																											document
																													.getElementById("text").value)
																									.draw();

																							break;
																						case "text":
																							break;
																						default:
																							$(
																									"#demo")
																									.jstree(
																											this.id);
																							break;
																					}
																				});
															});
															$(function() {
																$("#demo")
																		.bind(
																				"before.jstree",
																				function(
																						e,
																						data) {
																					$(
																							"li:not([rel='drive']).jstree-open > a > .jstree-icon")
																							.css(
																									'background-image',
																									'url(partials/common/js/jstree-v.pre1.0/themes/toolbar_open.png)');
																					$(
																							"li:not([rel='drive']).jstree-closed > a > .jstree-icon")
																							.css(
																									'background-image',
																									'url(partials/common/js/jstree-v.pre1.0/themes/ic_explorer.png)');
																				})
																		.jstree(
																				{
																					"plugins" : [
																							"themes",
																							"json_data",
																							"ui",
																							"crrm",
																							"cookies",
																							"dnd",
																							"search",
																							"types",
																							"hotkeys",
																							"contextmenu",
																							"checkbox"
																					],

																					// contextmenu
																					"contextmenu" : {
																						items : { // Could
																							"create" : {
																								"separator_before" : true,
																								"separator_after" : true,
																								"label" : "Create",
																								"action" : false,
																								"submenu" : {
																									"create_file" : {
																										"seperator_before" : false,
																										"seperator_after" : false,
																										"label" : "File",
																										action : function(
																												obj) {
																											this
																													.create(
																															obj,
																															"last",
																															{
																																"attr" : {
																																	"rel" : "default"
																																}
																															});
																										}
																									},
																									"create_folder" : {
																										"seperator_before" : false,
																										"seperator_after" : false,
																										"label" : "Folder",
																										action : function(
																												obj) {
																											this
																													.create(
																															obj,
																															"last",
																															{
																																"attr" : {
																																	"rel" : "folder"
																																}
																															});
																										}
																									}

																								}
																							},
																							"ccp" : {
																								"separator_before" : false,
																								"separator_after" : true,
																								"label" : "Edit",
																								"action" : false,
																								"submenu" : {
																									"cut" : {
																										"seperator_before" : false,
																										"seperator_after" : false,
																										"label" : "Cut",
																										action : function(
																												obj) {
																											this
																													.cut(
																															obj,
																															"last",
																															{
																																"attr" : {
																																	"rel" : "default"
																																}
																															});
																										}
																									},
																									"paste" : {
																										"seperator_before" : false,
																										"seperator_after" : false,
																										"label" : "Paste",
																										action : function(
																												obj) {
																											this
																													.paste(
																															obj,
																															"last",
																															{
																																"attr" : {
																																	"rel" : "folder"
																																}
																															});
																										}
																									},

																									"changeType" : {
																										"seperator_before" : false,
																										"seperator_after" : false,
																										"label" : "Change Type",
																										"submenu" : {
																											"toFile" : {
																												"seperator_before" : false,
																												"seperator_after" : false,
																												"label" : "toFile",
																												action : function(
																														obj) {
																													this
																															.set_type("default");
																												}
																											},
																											"toFolder" : {
																												"seperator_before" : false,
																												"seperator_after" : false,
																												"label" : "toFolder",
																												action : function(
																														obj) {
																													this
																															.set_type("folder");
																												}
																											}
																										}
																									}

																								}
																							}

																						}
																					},

																					"json_data" : {
																						"ajax" : {
																							"url" : "/com/ext/jstree/strutsiBatis/getChildNode.action",
																							"data" : function(
																									n) {
																								return {
																									"c_id" : n.attr ? n
																											.attr(
																													"id")
																											.replace(
																													"node_",
																													"")
																											.replace(
																													"copy_",
																													"") : 1
																								};
																							}
																						}
																					},
																					"search" : {
																						"ajax" : {
																							"url" : "/com/ext/jstree/strutsiBatis/searchNode.action",
																							"data" : function(
																									str) {
																								return {
																									"searchString" : str
																								};
																							}
																						}
																					},
																					"types" : {
																						"max_depth" : -2,
																						"max_children" : -2,
																						"valid_children" : ["drive"
																						],
																						"types" : {
																							"default" : {
																								"valid_children" : "none",
																								"icon" : {
																									"image" : "partials/common/js/jstree-v.pre1.0/themes/attibutes.png"
																								}
																							},
																							"folder" : {
																								"valid_children" : [
																										"default",
																										"folder"
																								],
																								"icon" : {
																									"image" : "partials/common/js/jstree-v.pre1.0/themes/ic_explorer.png"
																								}
																							},
																							"drive" : {
																								"valid_children" : [
																										"default",
																										"folder"
																								],
																								"icon" : {
																									"image" : "partials/common/js/jstree-v.pre1.0/themes/home.png"
																								},
																								"start_drag" : false,
																								"move_node" : false,
																								"delete_node" : false,
																								"remove" : false
																							}
																						}
																					},
																					"ui" : {
																						"initially_select" : ["node_4"
																						]
																					},
																					"core" : {
																						"initially_open" : [
																								"node_2",
																								"node_3"
																						]
																					}
																				})
																		.bind(
																				"create.jstree",
																				function(
																						e,
																						data) {
																					$
																							.post(
																									"/com/ext/jstree/strutsiBatis/addNode.action",
																									{
																										"ref" : data.rslt.parent
																												.attr(
																														"id")
																												.replace(
																														"node_",
																														"")
																												.replace(
																														"copy_",
																														""),
																										"c_position" : data.rslt.position,
																										"c_title" : data.rslt.name,
																										"c_type" : data.rslt.obj
																												.attr("rel")
																									},
																									function(
																											r) {
																										if (r.status) {
																											$(
																													data.rslt.obj)
																													.attr(
																															"id",
																															"node_" + r.id);
																										} else {
																											$.jstree
																													.rollback(data.rlbk);
																										}
																										// $("#analyze").click();
																										$(
																												"span.ui-icon-refresh")
																												.click();

																										jstreeDataTableReload();

																									});
																				})
																		.bind(
																				"remove.jstree",
																				function(
																						e,
																						data) {
																					data.rslt.obj
																							.each(function() {
																								$
																										.ajax({
																											async : false,
																											type : 'POST',
																											url : "/com/ext/jstree/strutsiBatis/removeNode.action",
																											data : {
																												"c_id" : this.id
																														.replace(
																																"node_",
																																"")
																														.replace(
																																"copy_",
																																"")
																											},
																											success : function(
																													r) {
																												// $("#analyze").click();
																												$(
																														"span.ui-icon-refresh")
																														.click();

																												jstreeDataTableReload();

																											}
																										});
																							});
																				})
																		.bind(
																				"rename.jstree",
																				function(
																						e,
																						data) {
																					$
																							.post(
																									"/com/ext/jstree/strutsiBatis/alterNode.action",
																									{
																										"c_id" : data.rslt.obj
																												.attr(
																														"id")
																												.replace(
																														"node_",
																														"")
																												.replace(
																														"copy_",
																														""),
																										"c_title" : data.rslt.new_name,
																										"c_type" : data.rslt.obj
																												.attr("rel")
																									},
																									function(
																											r) {
																										if (!r.status) {
																											$.jstree
																													.rollback(data.rlbk);
																										}
																										// $("#analyze").click();
																										$(
																												"span.ui-icon-refresh")
																												.click();

																										jstreeDataTableReload();

																									});
																				})
																		.bind(
																				"set_type.jstree",
																				function(
																						e,
																						data) {
																					$
																							.post(
																									"/com/ext/jstree/strutsiBatis/alterNodeType.action",
																									{
																										"c_id" : data.rslt.obj
																												.attr(
																														"id")
																												.replace(
																														"node_",
																														"")
																												.replace(
																														"copy_",
																														""),
																										"c_title" : data.rslt.new_name,
																										"c_type" : data.rslt.obj
																												.attr("rel")
																									},
																									function(
																											r) {
																										// $("#analyze").click();
																										$(
																												"span.ui-icon-refresh")
																												.click();

																										jstreeDataTableReload();

																									});
																				})
																		.bind(
																				"move_node.jstree",
																				function(
																						e,
																						data) {
																					data.rslt.o
																							.each(function(
																									i) {
																								$
																										.ajax({
																											async : false,
																											type : 'POST',
																											url : "/com/ext/jstree/strutsiBatis/moveNode.action",
																											data : {
																												"c_id" : $(
																														this)
																														.attr(
																																"id")
																														.replace(
																																"node_",
																																"")
																														.replace(
																																"copy_",
																																""),
																												"ref" : data.rslt.cr === -1 ? 1 : data.rslt.np
																														.attr(
																																"id")
																														.replace(
																																"node_",
																																"")
																														.replace(
																																"copy_",
																																""),
																												"c_position" : data.rslt.cp + i,
																												"c_title" : data.rslt.name,
																												"copy" : data.rslt.cy ? 1 : 0,
																												"multiCounter" : i
																											},
																											success : function(
																													r) {
																												if (r.status) {
																													$.jstree
																															.rollback(data.rlbk);
																												} else {
																													$(
																															data.rslt.oc)
																															.attr(
																																	"id",
																																	"node_" + r.id);
																													if (data.rslt.cy && $(
																															data.rslt.oc)
																															.children(
																																	"UL").length) {
																														data.inst
																																.refresh(data.inst
																																		._get_parent(data.rslt.oc));
																													}
																												}
																												// $("#analyze").click();
																												$(
																														"span.ui-icon-refresh")
																														.click();

																												jstreeDataTableReload();

																											}
																										});
																							});
																				});

															});
															// ====================
															// jstree
															// ====================
															function jstreeDataTableReload() {
																$(
																		'.bs-example-modal-sm')
																		.modal(
																				'show');
																$(
																		'#jstreeTable')
																		.dataTable()
																		.api().ajax
																		.reload();
															}

															$(function() {

																var jstreeDataTable = $(
																		'#jstreeTable')
																		.dataTable(
																				{
																					"ajax" : {
																						"url" : "/com/ext/jstree/strutsiBatis/jstreeMonitor/getJstreeMonitor.action",
																						"dataSrc" : "rows"
																					},
																					"processing" : true,
																					"responsive" : true,
																					"paging" : true,
																					"lengthChange" : false,
																					"searching" : false,
																					"ordering" : true,
																					"info" : true,
																					"autoWidth" : false,
																					"columns" : [
																							{
																								"data" : "cell.0"
																							},
																							{
																								"data" : "cell.1"
																							},
																							{
																								"data" : "cell.2"
																							},
																							{
																								"data" : "cell.3"
																							},
																							{
																								"data" : "cell.4"
																							},
																							{
																								"data" : "cell.5"
																							},
																							{
																								"data" : "cell.6"
																							},
																							{
																								"data" : "cell.7"
																							}
																					]
																				});
															});
															// ====================
															// jstree DataTables
															// ====================
														});

										$.AdminLTE.layout.activate();

									}
							]);// strutsiBatisController.controller

		});
