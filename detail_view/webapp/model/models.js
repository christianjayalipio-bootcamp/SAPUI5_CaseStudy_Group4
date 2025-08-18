sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        /**
         * Loads the ProductOrders.json file and returns it as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The order detail model.
         */
        createOrderDetailModel: function () {
            var oModel = new JSONModel("model/ProductOrders.json");
            oModel.setDefaultBindingMode("TwoWay");
            return oModel;
        }
    };
});
