//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("freespee.callbackwidget.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "CallBack Widget",
		async: true,
		description: "The Callback Widget is a convient way for the end-user to be called directly or schedule a call within the next couple of days. When implemented on the advertiser site, it'll show up as a green phone symbol on the right hand side of the browser window. When the end-user activates the widget with a click it launches an overlay presenting a simple form. The form allows the end-user to enter his phone number and schedule the call to take place within 5 minutes or at a specific time in the next couple of days. When connecting the call, Freespee will first call the advertiser and after having confirmed that the advertiser did pick up the phone, the end-user will be called. Upon successful call establishment to both parties, the calls will be joined together, allowing the end-user and the advertiser to have a chat.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "//${domain_name}.freespee.com/js/external/fs.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "FreeSpee ID",
			description: "the ID provided by FreeSpee when entering the \"allowed number\" in the FreeSpee Dashboard. [REQUIRED]",
			token: "client_id",
			uv: ""
		}, {
			name: "FreeSpee Answer Number ID",
			description: "The ID of the phone number for the advertiser to connect calls to. Provided by FreeSpee. [REQUIRED]",
			token: "cbw_answering_number_id",
			uv: ""
		}, {
			name: "FreeSpee Style",
			description: "'desktop' or 'mobile' - defaults to 'desktop' [OPTIONAL]",
			token: "cbw_style",
			uv: ""
		}, {
			name: "FreeSpee Caller ID",
			description: "The phone number to be presented as Caller ID for the end-user [OPTIONAL]",
			token: "cbw_caller_id",
			uv: ""
		}, {
			name: "FreeSpee Visible Number",
			description: "this number will be replaced with a Freespee number as an alternative contact [OPTIONAL]",
			token: "cbw_visible_number",
			uv: ""
		}, {
			name: "FreeSpee Button ID",
			description: "ID of the button used to open the widget. Defaults to “fs-open-callback-widget”. [OPTIONAL]",
			token: "cbw_button_id",
			uv: ""
		}, {
			name: "FreeSpee LowLevel Domain Name",
			description: "Provided by FreeSpee - as in: \"//<--LowLevelDomainName-->.freespee.com/js/external/fs.js\" [REQUIRED]",
			token: "domain_name",
			uv: ""
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		/*~script*/
	},
	pre: function() {
		/*pre*/
		window.__fs_conf = window.__fs_conf || [];

		__fs_conf.push(['setAdv', {
			'id': '' + this.valueForToken("client_id"),
			'cbw_answering_number_id': '' + this.valueForToken(
				"cbw_answering_number_id"),
			'cbw_style': '' + this.valueForToken("cbw_style"),
			'cbw_caller_id': '' + this.valueForToken("cbw_caller_id"),
			'cbw_visible_number': '' + this.valueForToken("cbw_visible_number")
		}]);
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
