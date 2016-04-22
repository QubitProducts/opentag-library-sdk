//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"google.googledynamicremarketingtaghomeandcategorypage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Dynamic Remarketing Tag - Home and Category Page",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Google Conversion ID",
				token: "google_id",
				uv: ""
			}, {
				name: "Page Category",
				description: "Page Category",
				token: "cat",
				uv: "universal_variable.page.category"
			}],
		categories:[
			"Re-Targeting"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window.google_tag_params = {
				ecomm_pagetype: '' + this.valueForToken("cat")
			};

			window.google_conversion_id = this.valueForToken("google_id");
			window.google_custom_params = window.google_tag_params;
			window.google_remarketing_only = true;

			var script = document.createElement('script');
			script.type = "text/javascript";
			script.src = "//www.googleadservices.com/pagead/conversion.js";
			document.head.appendChild(script);
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
