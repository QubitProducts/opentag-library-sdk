/**ignore at merge**/
//:include tagsdk-current.js
qubit.opentag.Utils.namespace('googleanalytics.ecommercetrackingrequiredfieldsonly.v1.local');
googleanalytics.ecommercetrackingrequiredfieldsonly.v1.local.Config = {
  "parameters": [
     {
      "name": "GA Profile ID",
      "description": "Please enter your Google Analytics profile Id here. Example UA-123123-12",
      "token": "PROFILE_ID",
      "uv": "",
      "inputVariable": "UA-123123-12"
    },
     {
      "name": "Order Id",
      "description": "Internal unique order id number for this transaction.",
      "token": "orderId",
      "uv": "universal_variable.transaction.order_id",
      "inputVariable": ""
    },
     {
      "name": "Order Total",
      "description": "Total amount of the transaction.",
      "token": "orderTotal",
      "uv": "universal_variable.transaction.total",
      "inputVariable": ""
    },
     {
      "name": "Item SKU's",
      "description": "Item's SKU code.",
      "token": "itemSkus",
      "uv": "universal_variable.transaction.line_items[#].product.sku_code",
      "inputVariable": ""
    },
     {
      "name": "Item Names",
      "description": "Product name. Required to see data in the product detail report.",
      "token": "itemNames",
      "uv": "universal_variable.transaction.line_items[#].product.name",
      "inputVariable": ""
    },
     {
      "name": "Item Unit Prices",
      "description": "Product price - use the discounted rate that the user is actually buying at.",
      "token": "itemUnitPrices",
      "uv": "universal_variable.transaction.line_items[#].product.unit_sale_price",
      "inputVariable": ""
    },
     {
      "name": "Item Quantities",
      "description": "Quantity list of all the items",
      "token": "itemQuantities",
      "uv": "universal_variable.transaction.line_items[#].quantity",
      "inputVariable": ""
    }
  ]
};