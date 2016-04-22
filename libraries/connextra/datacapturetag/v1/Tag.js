//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("connextra.datacapturetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Data Capture Tag",
		async: true,
		description: "The Data Capture feature will allow Connextra to locate content relating to the Account Name and the \namount bet or deposited from your website and store into Connextra stats for analytical purposes. For \ndata protection, you are required to encrypt any sensitive information about your customers.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Connextra Client ID",
			description: "Your Connextra account ID",
			token: "client_id",
			uv: ""
		}, {
			name: "Connextra Page Type",
			description: "The page type you want this view to track as",
			token: "page_type",
			uv: ""
		}, {
			name: "Connextra Config Server",
			description: "The Connextra address which holds your configuration data.",
			token: "conf_server",
			uv: ""
		}],
		categories:[
			"Advertising Network"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		window.cxt_conf = cxt_conf || {};
		cxt_conf.clientId = cxt_conf.clientId || '' + this.valueForToken("client_id");
		cxt_conf.pageType = cxt_conf.pageType || '' + this.valueForToken("page_type");
		cxt_conf.server = '' + this.valueForToken("conf_server");

		var ca = document.createElement('script');
		ca.type = 'text/javascript';
		ca.async = true;
		ca.src = cxt_conf.server + '/script/ca.js';
		ca.onload = function() {
			cxtdcs()();
		};
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ca, s);
		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
