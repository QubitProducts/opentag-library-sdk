/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('olapic.checkoutpixel.v1.local');
olapic.checkoutpixel.v1.local.Config = {
  "parameters": [
     {
      "name": "Olapic API Key",
      "description": "This is the AlphaNumeric Identifier key for the customers account to allow communication to the Olapic servers.",
      "token": "apikey",
      "inputVariable": "123"
    },
     {
      "name": "User ID",
      "description": "The ID for the user.",
      "token": "userid",
      "uv": "universal_variable.user.user_id",
      "inputVariable": ""
    },
     {
      "name": "User Name",
      "description": "The name of the user.",
      "token": "username",
      "uv": "universal_variable.user.name",
      "inputVariable": ""
    },
     {
      "name": "User Email",
      "description": "The email for the user.",
      "token": "useremail",
      "uv": "universal_variable.user.email",
      "inputVariable": ""
    },
     {
      "name": "Order ID",
      "description": "The ID for the transaction.",
      "token": "orderid",
      "uv": "universal_variable.transaction.order_id",
      "inputVariable": ""
    },
     {
      "name": "Order Total",
      "description": "The total for the transaction.",
      "token": "ordertotal",
      "uv": "universal_variable.transaction.total",
      "inputVariable": ""
    },
     {
      "name": "Currency",
      "description": "The currency for the transaction.",
      "token": "ordertotal",
      "uv": "universal_variable.transaction.currency",
      "inputVariable": ""
    },
     {
      "name": "Product IDs",
      "description": "The IDs for the products purchased.",
      "token": "productids",
      "uv": "universal_variable.transaction.line_items[#].product.id",
      "inputVariable": ""
    },
     {
      "name": "Product Prices",
      "description": "The prices for the products purchased.",
      "token": "productprices",
      "uv": "universal_variable.transaction.line_items[#].product.unit_price",
      "inputVariable": ""
    }
  ]
};