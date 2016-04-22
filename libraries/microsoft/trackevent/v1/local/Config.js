/**ignore at merge**/
//:import sdk.releases.Current
qubit.opentag.Utils.namespace('microsoft.trackevent.v1.local');
microsoft.trackevent.v1.local.Config = {
  "parameters": [
     {
      "name": "Event Category",
      "description": "The category of the event",
      "token": "ec",
      "inputVariable": "1"
    },
     {
      "name": "Event Action",
      "description": "The action value for the event",
      "token": "ea",
      "inputVariable": "2"
    },
     {
      "name": "Event Label",
      "description": "The label for the event",
      "token": "el",
      "inputVariable": "3"
    },
     {
      "name": "Event Value",
      "description": "The value for the event",
      "token": "ev",
      "inputVariable": "4"
    }
  ]
};