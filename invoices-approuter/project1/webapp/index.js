sap.ui.define([
    "sap/m/Text"
],/**
 * 
 * @param {typeof sap.m.Text} Text 
 */

 function (Text) {
    new Text({
        text: "Hello World"
    }).placeAt("content");
 //   alert("UI5 is ready");
});