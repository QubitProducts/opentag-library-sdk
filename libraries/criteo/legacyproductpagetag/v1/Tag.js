//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("criteo.legacyproductpagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Legacy - Product Page Tag",
		async: true,
		description: "This is a mandatory tag and must be placed on all the advertiser product pages.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Criteo wi Parameter",
			description: "Criteo wi Parameter",
			token: "wi",
			uv: ""
		}, {
			name: "Criteo Subdomain Parameter",
			description: "The subdomain parameter provided by Criteo e.g. mydomain.widget.criteo.com",
			token: "subdomain",
			uv: ""
		}, {
			name: "Criteo Partner ID",
			description: "Partner ID provided by Criteo",
			token: "partner_id",
			uv: ""
		}, {
			name: "Criteo Call Parameter",
			description: "Call Parameter Provided by Criteo, e.g. pjl",
			token: "call_parameter",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
			token: "product_id",
			uv: "universal_variable.product.id"
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

		function pcto_dis() {
			if (document.createElement) {
				var cto_dis_im = document.createElement('IFRAME');
				if (cto_dis_im) {
					cto_dis_im.width = '1px';
					cto_dis_im.height = '1px';
					cto_dis_im.style.display = 'none';
					var cto_dis_im_src = '//dis.criteo.com/dis/dis.aspx?p=' +
						_this.valueForToken("partner_id") + '&c=2&cb=' +
						Math.floor(Math.random() * 99999999999);
					try {
						cto_dis_im_src += '&ref=' + encodeURIComponent(document.referrer);
					} catch (e) {}
					cto_dis_im.src = cto_dis_im_src.substring(0, 2000);
					var cto_dis_doc = document.getElementById('pcto_dis_div');
					if (cto_dis_doc !== null && cto_dis_doc.appendChild) {
						cto_dis_doc.appendChild(cto_dis_im);
					}
				}
			}
		}

		var _cr_d1 = document.createElement("div");
		_cr_d1.id = "pcto_dis_div";
		_cr_d1.style.display = "none";
		document.body.appendChild(_cr_d1);

		var _cr_d2 = document.createElement("div");
		_cr_d2.style.display = "none";

		var domain = window.location.protocol === "https:" ?
			"https://sslwidget.criteo.com" : "http://" +
			this.valueForToken("subdomain");

		var _cr_i = document.createElement("img");
		_cr_i.src = domain + "/" + this.valueForToken("call_parameter") +
			"/display.js?p1=" + escape("v=2&wi=" + this.valueForToken("wi") +
				"&pt1=2&i=" + this.valueForToken("product_id")) +
			"&t1=sendEvent&resptype=gif&cb=" + Math.floor(Math.random() * 99999999999);
		_cr_i.onload = pcto_dis;
		_cr_d2.appendChild(_cr_i);
		document.body.appendChild(_cr_d2);
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
