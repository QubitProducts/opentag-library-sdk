//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleuniversalanalytics.generictagsendingcustomfieldnameobjects.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Generic Tag sending custom Field Name Objects",
			async: true,
			description: "This tag sends a collection of custom field name objects, allowing for any combination of hit types to be sent. Consider populating a window variable with this array in a custom script. For field object reference, see: http://goo.gl/z9gs4",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Web Property ID",
				description: "Google Analytics Web Property ID for the Google Web Property you wish to track",
				token: "web_property_id",
				uv: ""
			}, {
				name: "Field Object Array",
				description: "An array of field objects, each of which must define at least a 'hitType'",
				token: "field_objects",
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
			var _this = this;

			(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', '//www.google-analytics.com/analytics.js',
				'ga');

			ga('create', '' + _this.valueForToken("web_property_id"));

			for (var i = 0; i < _this.valueForToken("field_objects").length; i++) {
				ga('send', _this.valueForToken("field_objects")[i]);
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
