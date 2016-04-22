/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('facebook.productaudiencesviewcontent.v1.local');
facebook.productaudiencesviewcontent.v1.local.Config = {
  "parameters": [
     {
      "name": "FB Country Code",
      "description": "e.g. en_UK ( if not sure, use : en_US )",
      "token": "url_locale",
      "uv": "",
      "inputVariable": "\"en_US\""
    },
     {
      "name": "Pixel ID",
      "description": "Client Specific (e.g. 6007143437659)",
      "token": "pixel_id",
      "uv": "",
      "inputVariable": "6007143437659"
    },
     {
      "name": "Value",
      "description": "Product price, if none, use following hardcoded value  instead : 0.00",
      "token": "product_value",
      "uv": "universal_variable.product.unit_price",
      "inputVariable": "5.00"
    },
     {
      "name": "Currency",
      "description": "",
      "token": "currency",
      "uv": "universal_variable.transaction.currency",
      "inputVariable": "\"GBP\""
    },
     {
      "name": "Product Name",
      "description": "Product Name",
      "token": "content_name",
      "uv": "universal_variable.product.name",
      "inputVariable": ""
    },
     {
      "name": "Category",
      "description": "Category",
      "token": "content_category",
      "uv": "universal_variable.product.category",
      "inputVariable": ""
    },
     {
      "name": "Product ID",
      "description": "Product ID(s)",
      "token": "content_id",
      "uv": "universal_variable.product.id",
      "inputVariable": ""
    }
  ]
};