/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('tvsquared.action.v1.local');
tvsquared.action.v1.local.Config = {
  "parameters": [
     {
      "name": "TVSquared Client ID",
      "description": "Will be supplied by TVSquared, and specifies the clients individual ID",
      "token": "clientID",
      "uv": "",
      "inputVariable": "\"123\""
    },
     {
      "name": "TVSquared Brand ID",
      "description": "Will be supplied by TVSquared, and specifies the brand within the client (separate countries, websites etc.)",
      "token": "brandID",
      "uv": "",
      "inputVariable": "\"123\""
    },
     {
      "name": "User ID",
      "description": "Client identifiable reference of the user taking the action.",
      "token": "userID",
      "uv": "universal_variable.user.user_id",
      "inputVariable": "\"1\""
    },
     {
      "name": "Action ID",
      "description": "If the client has a specific ID for the action, add here.",
      "token": "actionID",
      "uv": "",
      "inputVariable": "\"123\""
    },
     {
      "name": "Action Name",
      "description": "The name of the action captured (Conversion, Quote etc.).",
      "token": "actionName",
      "uv": "",
      "inputVariable": "\"test\""
    },
     {
      "name": "Revenue",
      "description": "For a sale, the total sales value.",
      "token": "revenue",
      "uv": "",
      "inputVariable": "\"10.00\""
    },
     {
      "name": "Product",
      "description": "Can be used to indicate an overall product type the action refers to (e.g. a home insurance quote, or a recurring conversion).",
      "token": "product",
      "uv": "",
      "inputVariable": "\"abc\""
    },
     {
      "name": "Promotion Code",
      "description": "If the client uses Promo codes to attribute data, the code can be added here.",
      "token": "promoCode",
      "uv": "",
      "inputVariable": "\"abc123\""
    }
  ]
};