/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('infectious.impressiondeskpixelwithparameters.v1.local');
infectious.impressiondeskpixelwithparameters.v1.local.Config = {
  "parameters": [
     {
      "name": "Pixel Id",
      "description": "Unique identifier for this pixel",
      "token": "pixel_id",
      "uv": "",
      "inputVariable": "\"11111111\""
    },
     {
      "name": "Doubleclick Type",
      "description": "Doubleclick Type",
      "token": "type",
      "uv": "",
      "inputVariable": "\"type\""
    },
     {
      "name": "Page Id",
      "description": "Page Id",
      "token": "page_id",
      "uv": "",
      "inputVariable": "\"home\""
    },
     {
      "name": "Order Code",
      "description": "Order Code",
      "token": "order_code",
      "uv": "universal_variable.transaction.order_id",
      "inputVariable": ""
    },
     {
      "name": "Order Value",
      "description": "Order Value",
      "token": "order_value",
      "uv": "universal_variable.transaction.total",
      "inputVariable": ""
    },
     {
      "name": "User Id",
      "description": "User Id",
      "token": "user_id",
      "uv": "universal_variable.user.user_id",
      "inputVariable": ""
    },
     {
      "name": "Gender",
      "description": "Gender",
      "token": "gender",
      "uv": "",
      "inputVariable": "\"male\""
    },
     {
      "name": "User Score",
      "description": "User Score",
      "token": "user_score",
      "uv": "",
      "inputVariable": "50"
    },
     {
      "name": "Segment 3g",
      "description": "Segment 3g",
      "token": "segment_3g",
      "uv": "",
      "inputVariable": "1"
    },
     {
      "name": "Page Type",
      "description": "Page Type",
      "token": "page_type",
      "uv": "universal_variable.page.type",
      "inputVariable": ""
    },
     {
      "name": "Product SKU",
      "description": "Product SKU",
      "token": "product_SKU",
      "uv": "universal_variable.transaction.line_items[#].product.sku_code",
      "inputVariable": ""
    },
     {
      "name": "Basket Value",
      "description": "Basket Value",
      "token": "basket_value",
      "uv": "universal_variable.basket.total",
      "inputVariable": ""
    },
     {
      "name": "Product Price",
      "description": "Product Price",
      "token": "product_price",
      "uv": "universal_variable.transaction.line_items[#].product.unit_sale_price",
      "inputVariable": ""
    },
     {
      "name": "Product Brand",
      "description": "Product brand",
      "token": "product_brand",
      "uv": "universal_variable.transaction.line_items[#].product.manufacturer",
      "inputVariable": ""
    }
  ]
};