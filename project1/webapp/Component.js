sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/sapui5/casestudy/group4/project1/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("com.sapui5.casestudy.group4.project1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});