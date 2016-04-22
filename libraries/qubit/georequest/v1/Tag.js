//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.georequest.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Geo Request",
		async: true,
		description: "A standardized template for making a request to Orca. Caches the result, and stores the parsed object (from cache or request) in window.qb_geo. But, the tag's asynchronous, so your best bet is to add a callback to window.qb_geo_cbs, and it'll get called when the object's available. NOTE: IE<8 doesn't have JSON, so you'll need to pull in the JSON2 tag as a dependency.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Client ID",
			description: "Client's tracking ID",
			token: "client_id",
			uv: ""
		}],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		function createCookie(name, value) {
			document.cookie = name + "=" + escape(value) + expires + "; path=/";
		}

		function getCookie(c_name) {
			if (document.cookie.length > 0) {
				c_start = document.cookie.indexOf(c_name + "=");
				if (c_start != -1) {
					c_start = c_start + c_name.length + 1;
					c_end = document.cookie.indexOf(";", c_start);
					if (c_end == -1) {
						c_end = document.cookie.length;
					}
					return unescape(document.cookie.substring(c_start, c_end));
				}
			}
			return "";
		}

		window.qb_geo_cbs = window.qb_geo_cbs || [];

		var geo = getCookie("_qb_geo");

		if (geo) {
			window.qb_geo = JSON.parse(geo);
			return;
		} else {
			window.clientId = "" + this.valueForToken("client_id"); // this is the client's tracking id
			window.cookieId = document.cookie.match(
				/_qubitTracker=([0-9.]+);/);
			if (cookieId && !! cookieId[1]) {
				cookieId = cookieId[1];
			} else {
				return;
			}

			var request = new XMLHttpRequest();
			request.open("GET", "url here", true);
			request.send();
			request.onreadystatechange = function() {
				if (request.readyState == 4) {
					window.qb_geo = JSON.parse(request.responseText);
					createCookie("_qb_geo", request.responseText);
					while (window.qb_geo_cbs.length > 0) {
						window.qb_geo_cbs.shift()(); //Remove first element and call it
					}
					//Overwrite push to just run the function now.
					window.qb_geo_cbs.push = function(cb) {
						cb();
					};
				}
			};
		}
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
