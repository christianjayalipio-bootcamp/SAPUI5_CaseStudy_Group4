sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("detailview.controller.DetailView", {
        onInit: function () {
            this._Page = this.byId("page");
            this._Page.setFloatingFooter(!this._Page.getFloatingFooter());
            },
    });
});