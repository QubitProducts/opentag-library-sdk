/**ignore at merge**/
//:include tagsdk-current.js
qubit.opentag.Utils.namespace('olapic.carouselwidget.v1.local');
olapic.carouselwidget.v1.local.Config = {
  "parameters": [
     {
      "name": "Olapic API Key",
      "description": "This is the AlphaNumeric Identifier key for the customers account to allow communication to the Olapic servers for their account.",
      "token": "apikey",
      "inputVariable": "123"
    },
     {
      "name": "Olapic Widget Reference",
      "description": "This is the AlphaNumeric Identifier key used to reference to a specific widget on the Olapic Servers.",
      "token": "widgetref",
      "inputVariable": "456"
    },
     {
      "name": "Element Reference",
      "description": "This is the reference to the div id used on the page which Olapic needs to target in order to inject the widget.",
      "token": "elementref",
      "inputVariable": "\"olapic\""
    },
     {
      "name": "Reference Key",
      "description": "This is an optional paramater used to dynamically reference the widget to a specific product or product category based on the unique ID values passed in the product Feed.",
      "defaultValue": "-",
      "token": "refkey",
      "inputVariable": "\"-\""
    },
     {
      "name": "Append DIV after Selector",
      "description": "The location for where the <div/> created by the script will be inserted into the DOM",
      "defaultValue": "body",
      "token": "appendat",
      "inputVariable": "\"div\""
    }
  ]
};