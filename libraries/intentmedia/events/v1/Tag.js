qubit.opentag.LibraryTag.define("intentmedia.events.v1.Tag", {
  getDefaultConfig: function () {
      return {
    /*config*/
    name: "Intent Media - Events",
    description: "To be used in conjunction with the Search Compare Ads Tag to handle Intent Media events",
    upgradeable: true,
    html: "",
    async: true,
    parameters: [{
        name: "Intent Media Event",
        description: "Intent Media event to be triggered (e.g.,'open_exit_unit', 'fill_exit_unit', 'page_id_updated', 'onpage_ads_redraw')",
        token: "im_event",
        uv: "",
        defaultValue: ""
    }],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

	/*~config*/
		};
  },

  script: function () {
    /*script*/
      if(this.valueForToken("im_event")) {
          if(IntentMedia && IntentMedia.trigger) {
              IntentMedia.trigger(this.valueForToken("im_event"));
          }
      }
  	/*~script*/
  },

  pre: function () {
    /*pre*/
  	/*~pre*/
  },

  post: function() {
    /*post*/
    /*~post*/
  }
});
