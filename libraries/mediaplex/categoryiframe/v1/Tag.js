//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("mediaplex.categoryiframe.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Category iframe",
		async: true,
		description: "The category iframe, in addition to a pageview, passes the particular product categories the customer is viewing.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Mediaplex Client ID",
			description: "The ID assigned to you by Mediaplex",
			token: "client_id",
			uv: ""
		}, {
			name: "Page Name",
			description: "The name of the page being accessed. Typically all lowercase, with underscores",
			token: "page_name",
			uv: ""
		}, {
			name: "Event Name",
			description: "The name of the event triggered. Typically, this is a CamelCased version of the page name",
			token: "event_name",
			uv: ""
		}, {
			name: "Page Category",
			description: "The category of the page the user is viewing",
			token: "category",
			uv: "universal_variable.page.category"
		}, {
			name: "Page Subcategory",
			description: "The subcategory of the page the user is viewing",
			token: "subcategory",
			uv: "universal_variable.page.subcategory"
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var frame = document.createElement("iframe");
		var src = (document.location.protocol === "https:") ? "https://secure." :
			"http://";
		src = src + "img-cdn.mediaplex.com/0/" +
			this.valueForToken("client_id") + "/universal.html?page_name=" +
			this.valueForToken("page_name") + "&" +
			this.valueForToken("event_name") + "=1&Primary_Category=" +
			this.valueForToken("category") + "&Sub_Category=" +
			this.valueForToken("subcategory") +
			"&mpuid=";
		frame.src = src;
		frame.height = 1;
		frame.width = 1;
		frame.frameborder = 0;
		document.body.appendChild(frame);
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
