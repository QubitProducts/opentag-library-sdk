/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('facebook.productaudiencesaddtocart.v1.local');
facebook.productaudiencesaddtocart.v1.local.Config = {
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
      "inputVariable": ""
    },
     {
      "name": "Currency",
      "description": "",
      "token": "currency",
      "uv": "universal_variable.basket.currency",
      "inputVariable": "\"GBP\""
    },
     {
      "name": "Product IDs",
      "description": "",
      "token": "product_category_ids",
      "uv": "",
      "inputVariable": "\"test\""
    }
  ]
};