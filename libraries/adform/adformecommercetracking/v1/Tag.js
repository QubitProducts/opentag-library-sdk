//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("adform.adformecommercetracking.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "AdForm - Ecommerce Tracking",
		async: true,
		description: "To be placed only on order confirmation page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "track.adform.net/serving/scripts/trackpoint/async/",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "AdForm Campaign ID",
			description: "Unique client id for AdForm",
			token: "campaignid",
			uv: ""
		}, {
			name: "AdForm Point ID",
			description: "Point ID for the tag. Usually unique to page type.",
			token: "pointid",
			uv: ""
		}, {
			name: "Subtotal",
			description: "The subtotal of the order",
			token: "subtotal",
			uv: "universal_variable.transaction.subtotal"
		}, {
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}, {
			name: "Order quantity list",
			description: "The quantities for all the individual products",
			token: "order_quantity_list",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Billing country",
			description: "",
			token: "country",
			uv: "universal_variable.transaction.billing.country"
		}, {
			name: "Agegroup",
			description: "(Optional) The age group of the purchaser.",
			token: "agegroup",
			uv: "universal_variable.user.age"
		}, {
			name: "Gender",
			description: "(Optional) Gender",
			token: "gender",
			uv: "universal_variable.user.gender"
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "User Email",
			description: "",
			token: "email",
			uv: "universal_variable.user.email"
		}, {
			name: "User full name",
			description: "",
			token: "name",
			uv: "universal_variable.user.name"
		}, {
			name: "Address Line 1",
			description: "House name and road name",
			token: "delivery_address_1",
			uv: "universal_variable.transaction.delivery.address"
		}, {
			name: "Address Line 2",
			description: "Town or city",
			token: "delivery_address_2",
			uv: "universal_variable.transaction.delivery.city"
		}, {
			name: "Phone",
			description: "(Optional) The phone number of the purchaser.",
			token: "phone",
			uv: ""
		}, {
			name: "Zip Code",
			description: "",
			token: "postcode",
			uv: "universal_variable.transaction.delivery.postcode"
		}, {
			name: "Product ID list",
			description: "An array of product ids purchased",
			token: "product_id_arr",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Category Name List",
			description: "An array of category names of the products ordered",
			token: "category_name_arr",
			uv: "universal_variable.transaction.line_items[#].product.category"
		}, {
			name: "Product Name List",
			description: "An array of product names purchased",
			token: "product_name_arr",
			uv: "universal_variable.transaction.line_items[#].product.name"
		}, {
			name: "Product Count List",
			description: "An array of the quantities of each product purchased",
			token: "product_count_arr",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}, {
			name: "Product Sales List",
			description: "A list of the total sales of the product (qty x product value)",
			token: "product_sales_arr",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}],
		categories:[
			"Advertising Network"
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
		// The basic tracker
		window._adftrack = {
			pm: '' + this.valueForToken("campaignid"),
			id: '' + this.valueForToken("pointid")
		};

		// Split the user name into first and last name
		var full_name = '' + this.valueForToken("name");
		var name_arr = full_name.split(' ');
		var first_name = name_arr[0];
		name_arr.splice(0, 1);
		var last_name = name_arr.join(' ');

		// Get items and total order quantity
		var i = 0,
			ii = this.valueForToken("product_id_arr").length,
			total_quantity = 0,
			items = [];
		for (; i < ii; i++) {
			total_quantity += this.valueForToken("order_quantity_list")[i];
			var item = {
				categoryname: this.valueForToken("category_name_arr")[i],
				productid: this.valueForToken("product_id_arr")[i],
				productname: this.valueForToken("product_name_arr")[i],
				productcount: this.valueForToken("product_count_arr")[i],
				productsales: this.valueForToken("product_sales_arr")[i]
			}
			items[i] = item;
		}

		// Add the order details
		window._adftrack.order = {
			sales: '' + this.valueForToken("subtotal"),
			currency: '' + this.valueForToken("currency"),
			basketsize: total_quantity,
			country: '' + this.valueForToken("country"),
			agegroup: '' + this.valueForToken("agegroup"),
			gender: '' + this.valueForToken("gender"),
			orderid: '' + this.valueForToken("order_id"),
			email: '' + this.valueForToken("email"),
			firstname: first_name,
			lastname: last_name,
			address1: '' + this.valueForToken("delivery_address_1"),
			address2: '' + this.valueForToken("delivery_address_2"),
			phone: '' + this.valueForToken("phone"),
			zip: '' + this.valueForToken("postcode"),
			itms: items
		};
		/*~pre*/
	},
	post: function() {
		/*post*/
		/*~post*/
	}
});
