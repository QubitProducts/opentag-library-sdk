/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('criteo.onetaghomepage.v2.local');
criteo.onetaghomepage.v2.local.Config = {
  "parameters": [
     {
      "name": "Criteo Partner ID",
      "description": "The ID assigned to you by Criteo",
      "token": "partner_id",
      "uv": "",
      "inputVariable": "4444"
    },
     {
      "name": "Customer ID",
      "description": "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
      "token": "customer_id",
      "uv": "universal_variable.user.user_id",
      "inputVariable": ""
    },
     {
      "name": "Site Type",
      "description": "\"m\" for mobile or \"t\" for tablet or \"d\" for  desktop",
      "token": "site_type",
      "uv": "",
      "inputVariable": "m"
    },
     {
      "name": "Hashed E-mail",
      "description": "Pass hashed e-mail to this parameter for X-Device",
      "token": "hashed_email",
      "uv": "",
      "inputVariable": "sdfsdfasdfsdrrfsdrfgsdfgsdfgsdfg"
    },
     {
      "name": "E-mail",
      "description": "Pass plain text e-mail to this parameter for X-Device. We will hash it.",
      "token": "email",
      "uv": "",
      "inputVariable": "sdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgdf"
    }
  ]
};