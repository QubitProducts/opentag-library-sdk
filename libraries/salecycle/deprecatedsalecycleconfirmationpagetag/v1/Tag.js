//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"salecycle.deprecatedsalecycleconfirmationpagetag.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "DEPRECATED SaleCycle Confirmation Page Tag",
			async: true,
			description: "The tag loads a 1px by 1px blank image in the page by calling the SaleCycle PixelCapture.aspx page, and should be implemented on the order completion page only, as close to the top of the page as possible within the <body> tags.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Client ID",
				description: "Implementation consultant will provide you with your Client ID",
				token: "clientID",
				uv: ""
			}, {
				name: "Customer Email",
				description: "",
				token: "userEmail",
				uv: "universal_variable.user.email"
			}],
		categories:[
			"Re-Targeting"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			var src = [
				'https://app.salecycle.com/Import/PixelCapture.aspx?',
				'c=', '' + this.valueForToken("clientID"),
				'&e=', '' + this.valueForToken("userEmail")
			].join('');
			var img = document.createElement('img');
			img.setAttribute('src', src);
			document.body.append(img);
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
