//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"criteo.legacyconfirmationpagetagextradetails.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Legacy - Confirmation Page Tag - Extra details",
			async: true,
			description: "This is a mandatory tag and must be executed on the confirmation page after user made payment. This contains variables to specify whether the user is new and also whether the sale was post-click or post-impression.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "Criteo WI Parameter",
				description: "Criteo wi parameter value",
				token: "wi",
				uv: ""
			}, {
				name: "Criteo call parameter value",
				description: "Criteo call parameter value",
				token: "call_parameter",
				uv: ""
			}, {
				name: "Is Post Click",
				description: "Must be a custom javascript variable which returns true only if the sale is post click",
				token: "is_post_click",
				uv: ""
			}, {
				name: "User is returning",
				description: "User is returning",
				token: "returning",
				uv: "universal_variable.user.returning"
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Product IDs",
				description: "",
				token: "product_ids",
				uv: "universal_variable.transaction.line_items[#].product.id"
			}, {
				name: "Product Unit Sale Prices",
				description: "",
				token: "product_unit_prices",
				uv: "universal_variable.transaction.line_items[#].product.unit_price"
			}, {
				name: "Quantities",
				description: "",
				token: "quantities",
				uv: "universal_variable.transaction.line_items[#].quantity"
			}],
		categories:[
			"Re-Targeting"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			var src, newUser, isNotPostClick, params;
			src = [
				"https://", "sslwidget.criteo.com", "/",
				"" + this.valueForToken("call_parameter"),
				"/",
				"display.js?",
				"p1="
			];
			newUser = ("" + this.valueForToken("returning") === "true") ? "0" : "1";
			isNotPostClick = ("" + this.valueForToken("is_post_click") === "true") ? "0" :
				"1";
			params = [
				"v=2",
				"&s=1",
				"&nc=", newUser,
				"&dd=", isNotPostClick,
				"&wi=", "" + this.valueForToken("wi"),
				"&t=", "" + this.valueForToken("order_id")
			];

			for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
				var index = i + 1;
				params.push("&i" + index + "=" + this.valueForToken("product_ids")[i]);
				params.push("&p" + index + "=" +
					this.valueForToken("product_unit_prices")[i]);
				params.push("&q" + index + "=" + this.valueForToken("quantities")[i]);
			}
			src.push(escape(params.join("")));
			src.push("&t1=transaction&resptype=gif");
			var img = document.createElement("img");
			img.setAttribute("src", src.join(""));
			img.setAttribute("height", "1");
			img.setAttribute("width", "1");
			document.body.appendChild(img);
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
