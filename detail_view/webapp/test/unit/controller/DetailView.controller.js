/*global QUnit*/

sap.ui.define([
	"detailview/controller/DetailView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DetailView Controller");

	QUnit.test("I should test the DetailView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
