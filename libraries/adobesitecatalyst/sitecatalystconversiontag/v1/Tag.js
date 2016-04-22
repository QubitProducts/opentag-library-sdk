//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"adobesitecatalyst.sitecatalystconversiontag.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "SiteCatalyst Conversion Tag",
			async: true,
			description: "This should be placed only conversion/confirmation page. Any unused variables should be left blank.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "${scriptURL}",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Omniture S Code URL",
				description: "The custom s_code.js provided to you should be hosted on your server e.g. abc.com/scripts/s_code.js",
				token: "scriptURL",
				uv: ""
			}, {
				name: "Page Name",
				description: "",
				token: "page_name",
				uv: "universal_variable.page.subcategory"
			}, {
				name: "Omniture Server Address",
				description: "Server used for Omniture analytics",
				token: "server",
				uv: ""
			}, {
				name: "Omniture Channel",
				description: "The custom s_code.js provided to you should be hosted on your server e.g. abc.com/scripts/s_code.js",
				token: "channel",
				uv: "universal_variable.page.category"
			}, {
				name: "Page Type",
				description: "",
				token: "page_type",
				uv: "universal_variable.page.category"
			}, {
				name: "Campaign Name",
				description: "",
				token: "campaign",
				uv: ""
			}, {
				name: "Address - State",
				description: "",
				token: "state",
				uv: "universal_variable.transaction.delivery.state"
			}, {
				name: "Address - Zip Code",
				description: "",
				token: "zip",
				uv: "universal_variable.transaction.delivery.postcode"
			}, {
				name: "Omniture Events",
				description: "",
				token: "events",
				uv: ""
			}, {
				name: "Product Name List",
				description: "",
				token: "product_names",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Product ID List",
				description: "",
				token: "product_ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product Quantities",
				description: "",
				token: "quants",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}, {
				name: "Product Category List",
				description: "",
				token: "categories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Prop 1",
				description: "",
				token: "prop1",
				uv: ""
			}, {
				name: "Prop 2",
				description: "",
				token: "prop2",
				uv: ""
			}, {
				name: "Prop 3",
				description: "",
				token: "prop3",
				uv: ""
			}, {
				name: "Prop 4",
				description: "",
				token: "prop4",
				uv: ""
			}, {
				name: "Prop 5",
				description: "",
				token: "prop5",
				uv: ""
			}, {
				name: "eVar 1",
				description: "",
				token: "evar1",
				uv: ""
			}, {
				name: "eVar 2",
				description: "",
				token: "evar2",
				uv: ""
			}, {
				name: "eVar 3",
				description: "",
				token: "evar3",
				uv: ""
			}, {
				name: "eVar 4",
				description: "",
				token: "evar4",
				uv: ""
			}, {
				name: "eVar 5",
				description: "",
				token: "evar5",
				uv: ""
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
			/*~pre*/
		},
		post: function() {
			/*post*/
			var s = window.s;

			s.pageName = "" + this.valueForToken("page_name");
			s.server = "" + this.valueForToken("server");
			s.channel = "" + this.valueForToken("channel");
			s.pageType = "" + this.valueForToken("page_type");
			s.prop1 = "" + this.valueForToken("prop1");
			s.prop2 = "" + this.valueForToken("prop2");
			s.prop3 = "" + this.valueForToken("prop3");
			s.prop4 = "" + this.valueForToken("prop4");
			s.prop5 = "" + this.valueForToken("prop5");

			var i = 0,
				ii = this.valueForToken("product_ids").length,
				productList = [];

			for (; i < ii; i++) {
				var product = [];
				product.push(this.valueForToken("product_names")[i],
					this.valueForToken("product_ids")[i]);
				product.push(this.valueForToken("quants")[i],
					this.valueForToken("categories")[i]);
				productList.push(product.join(";"));
			}

			s.products = productList.join(",");


			/* Conversion Variables */
			s.campaign = "" + this.valueForToken("campaign");
			s.state = "" + this.valueForToken("state");
			s.zip = "" + this.valueForToken("zip");
			s.events = "" + this.valueForToken("events");
			s.purchaseID = "" + this.valueForToken("order_id");
			s.eVar1 = "" + this.valueForToken("evar1");
			s.eVar2 = "" + this.valueForToken("evar2");
			s.eVar3 = "" + this.valueForToken("evar3");
			s.eVar4 = "" + this.valueForToken("evar4");
			s.eVar5 = "" + this.valueForToken("evar5");

			window.s_code = s.t();

			/*~post*/
		}
	});
