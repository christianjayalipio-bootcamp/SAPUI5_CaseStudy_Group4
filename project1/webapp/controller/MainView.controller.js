sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sapui5.casestudy.group4.project1.controller.MainView", {
        onInit: function () {
            const oPage = this.byId("page0");
            if (oPage) {
                oPage.setFloatingFooter(!oPage.getFloatingFooter());
            }
        },

        onCreateOrder: function () {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteCreateOrder");
        }
    });
});