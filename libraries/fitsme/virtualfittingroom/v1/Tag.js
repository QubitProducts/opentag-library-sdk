//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("fitsme.virtualfittingroom.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Virtual Fitting Room",
		async: true,
		description: "This product page tag adds the code needed to populate the \"fitsme_launcher\" div and makes sure GA is properly prepared (if present). It requires the FitsMeData object to be populated, either server-side or in a custom script which this depends on.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			"Merchandising & Rich Media"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/

		window._gaq = window._gaq || [];
		_gaq.push(['_setAllowLinker', true]);
		_gaq.push(['_setAllowHash', false]);

		var fmJsHost = (("https:" == document.location.protocol) ? "https" :
			"http");
		var fmScript = document.createElement("script");
		fmScript.src = unescape(fmJsHost + "://www.fits.me/vfr.js");
		document.head.appendChild(fmScript);

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
