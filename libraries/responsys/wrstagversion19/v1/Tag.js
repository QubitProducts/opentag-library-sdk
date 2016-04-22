//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("responsys.wrstagversion19.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "WRS Tag - version 1.9",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Customer ID",
			description: "Set a Customer ID or leave blank",
			token: "customer_id",
			uv: ""
		}, {
			name: "Track Page View",
			description: "set to true (if tracking a page view) or false",
			token: "track_page_view",
			uv: ""
		}, {
			name: "Page View ID",
			description: "if you're tracking a page view, set the page ID here or leave blank if not available",
			token: "page_id",
			uv: ""
		}, {
			name: "Category Page ID",
			description: "Leave blank if you don't want to track a Category page view",
			token: "category_page_id",
			uv: ""
		}, {
			name: "Product Viewed ID",
			description: "Leave blank if you don't want to track a product page view",
			token: "product_viewed_id",
			uv: ""
		}, {
			name: "Product Added ID",
			description: "Set product ID of a product just added to the basket or leave blank if not applicable",
			token: "product_added",
			uv: ""
		}, {
			name: "Product Removed ID",
			description: "Array of product IDs removed from the basket or empty array if not applicable",
			token: "product_removed",
			uv: ""
		}, {
			name: "Basket ID",
			description: "Set a Basket ID as soon as the 1st product is added or leave blank if not applicable",
			token: "basket_id",
			uv: ""
		}, {
			name: "Track Checkout Start",
			description: "Set to true (if user just clicked on the Checkout button) or false",
			token: "track_checkout_start",
			uv: ""
		}, {
			name: "Checkout ID",
			description: "If tracking the start of Checkout, set a Checkout ID here or leave blank",
			token: "checkout_id",
			uv: ""
		}, {
			name: "Confirmation ID",
			description: "If you want to track a confirmed purchase, set the Confirmation ID or leave blank if not applicable",
			token: "confirmation_id",
			uv: ""
		}, {
			name: "Account ID",
			description: "Account ID",
			token: "account_id",
			uv: ""
		}],
		categories:[
			"Re-Targeting"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		var _this = this;
		var _riTrack;
		function _riInit() {
			_riTrack = riTrack.init("" + _this.valueForToken("account_id"));
			var customerID = "" + _this.valueForToken("customer_id");
			if (customerID.length)
				_riTrack.setCustomer(customerID);
			if (_this.valueForToken("track_page_view")) {
				var pageID = "" + _this.valueForToken("page_id");
				if (pageID.length)
					_riTrack.trackPageView(pageID);
				else
					_riTrack.trackPageView();
			}

			var productCategory = "" + _this.valueForToken("category_page_id");
			if (productCategory.length)
				_riTrack.trackViewProductCategory(productCategory);
			var productViewedID = "" + _this.valueForToken("product_viewed_id");
			if (productViewedID.length)
				_riTrack.trackViewProduct(productViewedID);
			var productAddedID = "" + _this.valueForToken("product_added");
			if (productAddedID.length)
				_riTrack.trackAddProductToCart(productAddedID);
			for (var i = 0; i < _this.valueForToken("product_removed").length; i++) {
				_riTrack.trackRemoveProductFromCart(_this.valueForToken("product_removed")[i] + "");
			}

			var cartID = "" + _this.valueForToken("basket_id");
			if (cartID.length)
				_riTrack.setCartID(cartID);
			if (_this.valueForToken("track_checkout_start")) {
				var cartID = "" + _this.valueForToken("checkout_id");
				if (cartID.length)
					_riTrack.trackCartCheckout(cartID);
				else
					_riTrack.trackCartCheckout();
			}

			var confirmationID = "" + _this.valueForToken("confirmation_id");
			if (confirmationID.length)
				_riTrack.trackCartPurchased(confirmationID);
		}
		;
		window._riTrack = _riTrack;
		this.loadURL(window.location.protocol +
			"//custom-wrs.api.responsys.net/ts-wrs/js/ri.min.js");
		//</scr ipt><script type="text/javascript" src=""></sc ript>
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
