//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("criteo.legacyhomepagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Legacy - Home Page Tag",
		async: true,
		description: "The home page tag has to be integrated on the home page of the advertiser website.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Criteo wi Parameter",
			description: "Criteo wi parameter",
			token: "wi",
			uv: ""
		}, {
			name: "Criteo Partner ID",
			description: "The partner ID number provided by criteo",
			token: "partner_id",
			uv: ""
		}, {
			name: "Criteo Subdomain",
			description: "The subdomain used for this home page script, e.g. mydomain.widget.criteo.com",
			token: "subdomain",
			uv: ""
		}, {
			name: "Criteo Call Parameter",
			description: "A specific call parameter provided by Criteo.",
			token: "call_parameter",
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
		function pcto_dis() {
			if (document.createElement) {
				var cto_dis_im = document.createElement('iframe');
				if (cto_dis_im) {
					cto_dis_im.width = '1px';
					cto_dis_im.height = '1px';
					cto_dis_im.style.display = 'none';
					var cto_dis_im_src = '//dis.criteo.com/dis/dis.aspx?p=' + this.valueForToken(
						"partner_id") + '&c=2&cb=' + Math.floor(Math.random() * 99999999999);
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
			"https://sslwidget.criteo.com" : "http://" + this.valueForToken(
				"subdomain");

		var _cr_i = document.createElement("img");
		_cr_i.src = domain + "/" + this.valueForToken("call_parameter") +
			"/display.js?p1=" + escape('v=2&wi=' +
				this.valueForToken("wi") + '&pt1=0&pt2=1') +
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
