sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.sanketMyFirstUI5App.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sanketMyFirstUI5App.view.View2
		 */
		//	onInit: function() {

		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sanketMyFirstUI5App.view.View2
		 */
		onBeforeRendering: function() {
			var oGlobalModelRef = this.getOwnerComponent().getModel("oGlobalModel");
			var value = oGlobalModelRef.getProperty("/Name");
			this.getView().byId("name1").setValue(value);
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sanketMyFirstUI5App.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sanketMyFirstUI5App.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});