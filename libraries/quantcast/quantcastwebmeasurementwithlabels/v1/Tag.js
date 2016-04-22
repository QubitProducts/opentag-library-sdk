//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"quantcast.quantcastwebmeasurementwithlabels.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "QuantCast Web Measurement - with labels",
			async: true,
			description: "Provides audience information showcasing your website’s traffic, demographic, geographic, affinities and business stats. This version includes the \"labels\" parameter.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Account Number",
				description: "Your QuantCast account number",
				token: "account_no",
				uv: ""
			}, {
				name: "Labels",
				description: "Labels for visitor segmentation, see Quantcast documentation for further info",
				token: "labels",
				uv: ""
			}],
		categories:[
			"Audience Management"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window._qevents = window._qevents || [];

			var e = document.createElement("script");
			e.src = (document.location.protocol === "https:" ? "https://secure" :
				"http://edge") + ".quantserve.com/quant.js";
			e.async = true;
			document.getElementsByTagName("head")[0].appendChild(e);
			_qevents.push({
				qacct: "" + this.valueForToken("account_no"),
				labels: "" + this.valueForToken("labels")
			});
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
