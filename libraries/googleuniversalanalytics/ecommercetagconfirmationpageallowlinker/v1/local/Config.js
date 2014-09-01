/**ignore at merge**/
//:include tagsdk-current.js
qubit.opentag.Utils.namespace('googleuniversalanalytics.ecommercetagconfirmationpage_allowlinker.v1.local');
googleuniversalanalytics.ecommercetagconfirmationpage_allowlinker.v1.local.Config = {
  "parameters": [
     {
      "name": "Web Property ID",
      "description": "Google Analytics Web Property ID for the Google Web Property you wish to track",
      "token": "web_property_id",
      "uv": "",
      "inputVariable": "1"
    },
     {
      "name": "Order ID",
      "description": "The order ID associated with this transaction",
      "token": "order_id",
      "uv": "universal_variable.transaction.order_id",
      "inputVariable": ""
    },
     {
      "name": "Store Name",
      "description": "The store or affiliation from which this transaction occurred - or just a custom string",
      "token": "store_name",
      "uv": "",
      "inputVariable": "2"
    },
     {
      "name": "Revenue",
      "description": "Specifies the total revenue associated with the transaction. Should include shipping and tax",
      "token": "revenue",
      "uv": "universal_variable.transaction.total",
      "inputVariable": ""
    },
     {
      "name": "Shipping Cost",
      "description": "The value of the shipping charge associated with this order",
      "token": "shipping",
      "uv": "universal_variable.transaction.shipping_cost",
      "inputVariable": ""
    },
     {
      "name": "Tax Value",
      "description": "The amount of tax charged on this order",
      "token": "tax",
      "uv": "universal_variable.transaction.tax",
      "inputVariable": ""
    },
     {
      "name": "Currency",
      "description": "The currency which this transaction was paid in",
      "token": "currency",
      "uv": "universal_variable.transaction.currency",
      "inputVariable": ""
    },
     {
      "name": "Item Name List",
      "description": "An array of names associated with each product in this order",
      "token": "item_names",
      "uv": "universal_variable.transaction.line_items[#].product.name",
      "inputVariable": ""
    },
     {
      "name": "Item SKU List",
      "description": "An array containing SKUs associated with each product in this order",
      "token": "item_skus",
      "uv": "universal_variable.transaction.line_items[#].product.sku_code",
      "inputVariable": ""
    },
     {
      "name": "Item Category List",
      "description": "An array containing the categories associated with each product in this order",
      "token": "item_cats",
      "uv": "universal_variable.transaction.line_items[#].product.category",
      "inputVariable": ""
    },
     {
      "name": "Item Price List",
      "description": "An array containing unit prices paid for each product in this order",
      "token": "item_prices",
      "uv": "universal_variable.transaction.line_items[#].product.unit_sale_price",
      "inputVariable": ""
    },
     {
      "name": "Item Quantities List",
      "description": "An array containing quantities associated with each product in this order",
      "token": "item_quantities",
      "uv": "universal_variable.transaction.line_items[#].quantity",
      "inputVariable": ""
    },
     {
      "name": "Site URL",
      "description": "Web site URL, without the 'www.'",
      "token": "url",
      "uv": "",
      "inputVariable": "3"
    }
  ]
};