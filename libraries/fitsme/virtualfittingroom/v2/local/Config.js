/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('fitsme.virtualfittingroom.v2.local');
fitsme.virtualfittingroom.v2.local.Config = {
  "parameters": [
     {
      "name": "Product SKU",
      "description": "The SKU identifying the current product",
      "token": "sku",
      "uv": "universal_variable.product.sku_code",
      "inputVariable": ""
    },
     {
      "name": "Product Title",
      "description": "The name of the product, localized if necessary.",
      "token": "name",
      "uv": "universal_variable.product.name",
      "inputVariable": ""
    },
     {
      "name": "Product Category",
      "description": "The primary category this product belongs in.",
      "token": "category",
      "uv": "universal_variable.product.category",
      "inputVariable": ""
    },
     {
      "name": "Product Image URL",
      "description": "URL to a high-quality image representing this product.",
      "token": "prodimg",
      "uv": "universal_variable.product.image_url",
      "inputVariable": ""
    },
     {
      "name": "Size ID Array",
      "description": "An array of sizeIDs of the same length and in the same order as the Size Title / Size Price arrays.",
      "token": "sizeids",
      "uv": "",
      "inputVariable": "[123,234,345]"
    },
     {
      "name": "Size Title Array",
      "description": "An array of size titles of the same length and in the same order as the Size ID / Size Price arrays.",
      "token": "titles",
      "uv": "",
      "inputVariable": "[\"s\",\"m\",\"l\"]"
    }
  ]
};