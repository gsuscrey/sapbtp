sap.ui.define([
//    "sap/m/Text"
    "sap/ui/core/mvc/XMLView"
],/**
 * 
 * @param {typeof sap.ui.core.mvc.XMLView} XMLView 
 */

 function (XMLView) {
    "use strict";
     XMLView.create({
         viewName: "GsusInvoices.project1.view.App"
     }).then(function (oView)
     { oView.placeAt("content");
    });
  //  new Text({
    //    text: "Hello World"
   // }).placeAt("content");
 //   alert("UI5 is ready");
});