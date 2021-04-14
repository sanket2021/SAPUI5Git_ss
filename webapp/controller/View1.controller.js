sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.sanketMyFirstUI5App.controller.View1", {
		onPressSubmit: function() {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.success(

				"Form Submitted Successfully", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		},
		onPressClear: function() {
			var oInput1 = this.getView().byId("Fname");
			oInput1.setValue("");
			var oInput2 = this.getView().byId("Lname");
			oInput2.setValue("");
			var oInput3 = this.getView().byId("Age");
			oInput3.setValue("");

		},

		onPressNavigate: function() {
			var input = this.getView().byId("Fname").getValue();
			var oGlobalModelRef = this.getOwnerComponent().getModel("oGlobalModel");
			oGlobalModelRef.setProperty("/Name",input);
			
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RoutetoView2");
		}

	});

});