sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
    "use strict";

    return Controller.extend("com.sapui5.casestudy.group4.project1.controller.MainView", {
        onInit: function () {
            // Initialization logic if needed
        },

        // Triggered when "Add" button in toolbar is pressed
        onAddOrder: function () {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteCreateOrder"); // Navigate to target route
        },
        onRowNavigate: function (){
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteDetailOrder");
        },
        onEditOrder: function (){
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteEditOrder");
        }

        // Triggered when row "Details" button is pressed
        // onRowNavigate: function (oEvent) {
        //     var oContext = oEvent.getSource().getBindingContext();
        //     if (oContext) {
        //         var sOrderNumber = oContext.getProperty("OrderNumber"); // adjust property name
        //         var oRouter = UIComponent.getRouterFor(this);
        //         oRouter.navTo("OrderDetail", {
        //             orderId: sOrderNumber   // pass order ID as parameter
        //         });
        //     } else {
        //         // fallback if no context
        //         var oRouter = UIComponent.getRouterFor(this);
        //         oRouter.navTo("OrderDetail");
        //     }
        // }
    });
});
