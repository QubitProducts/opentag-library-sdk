//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("nortonshoppingguarantee.nortonshoppingguarantee.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "Norton Shopping Guarantee",
		async: false,
		description: "This Tag creates the Norton Shopping Guarantee itself, and should be placed ONLY on your order complete / receipt page.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "nsg.symantec.com/private/rollover/rollover.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
      {
        token: "Hash",
        name: "Guarantee Seal Hash",
        description: "This value will be provided to you during integration."
      },
      {
        token: "Email",
        name: "The buyer's email address",
        uv: "universal_variable.user.email"
      },
      {
        token: "Order",
        name: "The transaction's order number",
        uv: "universal_variable.transaction.order_id"
      },
      {
        token: "Subtotal",
        name: "The transaction's order amount",
        uv: "universal_variable.transaction.subtotal"
      }
    ],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
	/*script*/

    if(window._GUARANTEE && _GUARANTEE.Loaded) {
      // Check to see if a guarantee span is already present.  If not, create one.
      var id      = '_GUARANTEE_GuaranteeSpan';
      var span    = document.getElementById(id);
      if(!span) {
        span      = document.createElement('span');
        span.id   = id;
        document.body.insertBefore(span, document.body.firstChild);
      }
      // Make the Guarantee call
      _GUARANTEE.Hash               = this.valueForToken('Hash');
      _GUARANTEE.Guarantee.order    = this.valueForToken('Order');
      _GUARANTEE.Guarantee.subtotal = this.valueForToken('Subtotal');
      _GUARANTEE.Guarantee.email    = this.valueForToken('Email');
      _GUARANTEE.WriteGuarantee('JavaScript', id);
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
