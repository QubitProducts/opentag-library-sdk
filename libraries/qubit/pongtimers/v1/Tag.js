//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.pongtimers.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Pong Timers",
		async: false,
		description: "Times how long it takes to load pong and pings the stats back.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pong URL",
			description: "URL of the pong to be tested",
			token: "pong_url",
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
		if (performance && performance.timing && (window.XDomainRequest ||
			XMLHttpRequest)) {

			var r = Math.floor(Math.random() * 50000);
			var url = "//pong.qubitproducts.com/qc?" + r;

			var start = new Date();
			if (window.XDomainRequest) {
				var xdr = new window.XDomainRequest();
				xdr.open("GET", url);
				xdr.send();
			} else {
				var request = new XMLHttpRequest();
				request.open("GET", url, false);
				request.send(null);
			}

			var end = new Date();
			var times = {
				_c_ping_start: start.getTime() - performance.timing.requestStart,
				_c_ping_end: end.getTime() - performance.timing.requestStart
			};

			window._qtd = window._qtd || [];
			window._qtd.push({
				data: times
			});
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
