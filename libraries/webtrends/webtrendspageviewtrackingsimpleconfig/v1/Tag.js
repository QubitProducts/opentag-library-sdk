//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"webtrends.webtrendspageviewtrackingsimpleconfig.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Webtrends pageview tracking - simple config",
			async: true,
			description: "The main WebTrends tag with full configuration options. Should be place on every page. See http://help.webtrends.com/en/jstag/ for full details of the different parameters.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "d22rutvoghj3db.cloudfront.net/opentag-cdn/webtrends.min.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "SmartSource Site ID",
				description: "The SmartSource Site id (DCSID).",
				token: "id",
				uv: ""
			}, {
				name: "Data Collection Server URI",
				description: "The hostname for the tracking pixels e.g. pdx-sdc.webtrends.com",
				token: "domain",
				uv: ""
			}, {
				name: "Timezone",
				description: "(int) The Web server time zone field contains the time zone of your web server. Use 0 for GMT.",
				token: "timezone",
				uv: ""
			}, {
				name: "User ID",
				description: "The id of the logged in user.",
				token: "user_id",
				uv: "universal_variable.user.user_id"
			}],
		categories:[
			"Web Analytics"
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
			window.webtrendsAsyncInit = function() {
				var options = {
					dcsid: "" + this.valueForToken("id"),
					domain: "" + this.valueForToken("domain"),
					timezone: this.valueForToken("timezone")
				};
				// User id
				var userId = "" + this.valueForToken("user_id");
				if (userId) options.vtid = userId;

				var dcs = new Webtrends.dcs(options);
				dcs.init(options);
				dcs.track();
			};
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
