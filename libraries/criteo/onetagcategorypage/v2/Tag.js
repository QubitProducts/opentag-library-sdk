//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("criteo.onetagcategorypage.v2.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "OneTag - Category Page",
		async: true,
		description: "Add to a page listing products. This will pick off the first three values in the Listing Product IDs array and send them to Criteo, with (by default) the page's subcategory as keywords. INTENDED FOR: Pages which do not include a query in their UV Listing.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "static.criteo.net/js/ld/ld.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Criteo Partner ID",
			description: "The ID assigned to you by Criteo",
			token: "partner_id",
			uv: ""
		}, {
			name: "Customer ID",
			description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Site Type",
			description: "\"m\" for mobile or \"t\" for tablet or \"d\" for desktop",
			token: "site_type",
			uv: ""
		}, {
			name: "Product ID List",
			description: "List of Product IDs displayed on this page",
			token: "product_ids",
			uv: "universal_variable.listing.items[#].id"
		}, {
			name: "List Keywords",
			description: "The keywords used to generate the list.",
			token: "list_keywords",
			uv: "universal_variable.page.subcategory"
		}, {
			name: "Hashed E-mail",
			description: "Pass hashed e-mail to this parameter for X-Device",
			token: "hashed_email",
			uv: ""
		}, {
			name: "E-mail",
			description: "Pass plain text e-mail to this parameter for X-Device. We will hash it.",
			token: "email",
			uv: "universal_variable.user.email"
		}],
		categories:[
			"Re-Targeting"
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
		/*~pre*/
	},
	post: function() {
		/*post*/
		//Criteo suggests that this list should only be 3 products long.
		var products = [];

		var ii = (this.valueForToken("product_ids").length < 3) ?
			this.valueForToken("product_ids").length : 3;

		for (i = 0; i < ii; i++) {
			products.push(this.valueForToken("product_ids")[i]);
		}

		var user_id = "" + this.valueForToken("customer_id");
		//Remove email if present.
		if (user_id.indexOf("@") > -1) {
			user_id = "";
		}

        if (this.valueForToken("email")!='') {
            var passedemail = {event: "setEmail", email: [this.valueForToken("email")]};
        } else {
            var passedemail = {event: "setHashedEmail", email: [this.valueForToken("hashed_email")]};
        }
        
		window.criteo_q = window.criteo_q || [];
		window.criteo_q.push({
			event: "setAccount",
			account: this.valueForToken("partner_id")
		}, {
			event: "setCustomerId",
			id: user_id
		}, {
			event: "setSiteType",
			type: "" + this.valueForToken("site_type")
		}, {
			event: "viewList",
			product: products,
			keywords: "" + this.valueForToken("list_keywords")
		}, passedemail);
		/*~post*/
	}
});
