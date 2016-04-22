/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('facebook.productaudiencespurchase.v1.local');
facebook.productaudiencespurchase.v1.local.Config = {
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
      "description": "transaction total, instead : 0.00",
      "token": "transaction_total",
      "uv": "universal_variable.transaction.total",
      "inputVariable": "200"
    },
     {
      "name": "Currency",
      "description": "",
      "token": "currency",
      "uv": "universal_variable.transaction.currency",
      "inputVariable": "\"GBP\""
    }
  ]
};