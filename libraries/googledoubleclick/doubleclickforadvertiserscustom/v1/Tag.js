//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googledoubleclick.doubleclickforadvertiserscustom.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "DoubleClick for Advertisers - Custom",
			async: true,
			description: "The conversion version of the DoubleClick tag",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "DoubleClick ID",
				description: "",
				token: "doubleclick_id",
				uv: ""
			}, {
				name: "DoubleClick Tag Type",
				description: "",
				token: "type",
				uv: ""
			}, {
				name: "DoubleClick Tag Category",
				description: "",
				token: "cat",
				uv: ""
			}, {
				name: "Order Total",
				description: "",
				token: "order_total",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Order ID",
				description: "",
				token: "order_id",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Custom Parameters",
				description: "",
				token: "custom",
				uv: ""
			}],
		categories:[
			"DSP (Ad Server)"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			var fl_if = document.createElement("iframe");
			fl_if.src = '//' + this.valueForToken("doubleclick_id") +
				'.fls.doubleclick.net/activityi;src=' +
				this.valueForToken("doubleclick_id") +
				';type=' +
				this.valueForToken("type") +
				';cat=' +
				this.valueForToken("cat") +
				';qty=1;cost=' +
				this.valueForToken("order_total") +
				';' +
				this.valueForToken("custom") +
				';ord=' +
				this.valueForToken("order_id") +
				'?';
			fl_if.width = "1";
			fl_if.height = "1";
			fl_if.frameborder = "0";
			fl_if.style.display = "none";
			document.body.appendChild(fl_if);
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
