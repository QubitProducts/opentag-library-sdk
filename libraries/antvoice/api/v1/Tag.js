//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("antvoice.api.v1.Tag", {
	config: {
		/*DATA*/
		name: "api",
		async: true,
		description: "Recommendation engine",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
			{
				name: "Antvoice API url",
				description: "url type : js.antvoice.com/sr-company.js without http",
				token: "antvoice_api_url",
				uv: "universal_variable.antvoice.antvoice_api_url"
			}
		]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
		var _this = this;
		window._srAsyncInit = function () {
			// Initialisation du SDK de recommandation sociale
			_sr._start();
			// Code d’initialisation de votre application
			// Identification de l’utilisateur, voir le détail plus bas
			_sr.init({});
		};
		// Chargement asynchrone du SDK
		(function (d, s) {
			var js, fjs = d.getElementsByTagName(s)[0];
			js = d.createElement(s);
			js.type = 'text/javascript';
			js.async = true;
			// antvoice_url : js.antvoice.com/sr-company.js
			js.src = '//'+_this.valueForToken('antvoice_api_url');
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script'));
		function srEnsureReady(callback) {
			if (!window.srReady) {
				window.setTimeout(function () {
					srEnsureReady(callback);
				}, 50);
			} else {
				callback();
			}
		}
	/*~SCRIPT*/
	},
	pre: function() {
	/*PRE*/
	/*~PRE*/
	},
	post: function() {
	/*POST*/
	/*~POST*/
	}
});
