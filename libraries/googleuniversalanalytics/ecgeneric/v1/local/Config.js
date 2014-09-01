/**ignore at merge**/
//:include tagsdk-current.js
qubit.opentag.Utils.namespace('googleuniversalanalytics.ecgeneric.v1.local');
googleuniversalanalytics.ecgeneric.v1.local.Config = {
  "parameters": [
     {
      "name": "Property ID",
      "token": "property_id",
      "description": "Universal Analytics Property ID",
      "defaultValue": [],
      "inputVariable": "'UA-26765492-2'"
    },
     {
      "name": "Create Configuration",
      "token": "create_conf",
      "description": "JavaScript configuration object for create command",
      "defaultValue": {},
      "inputVariable": "{ cookieDomain: 'none' }"
    },
     {
      "name": "Additional Commands",
      "token": "additional_commands",
      "description": "Array of additional commands to be executed",
      "defaultValue": [],
      "inputVariable": "[[\"set\", \"test\", \"hello\"]]"
    },
     {
      "name": "Pageview Configuration",
      "token": "pageview_conf",
      "description": "JavaScript configuration object for pageview command",
      "defaultValue": {},
      "inputVariable": "{ hi2: 'hello2' }"
    }
  ]
};