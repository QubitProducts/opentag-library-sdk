//:include tagsdk-current.js
//:include smartadserver/smartadserver/v1/Tag.js

qubit.opentag.LibraryTag.define("smartadserver.display.v1.Tag", {
	config: {
		/*DATA*/
		name: "display",
		async: true,
		description: "Display advertisement",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name:"sas call type",
			description:"SmartAdServer call type (values : std,iframe,onecall,xml,passback)",
			token:"sas_call_type",
			uv:"universal_variable.adserver.sas_call_type"
		},{
			name:"site id",
			description:"SmartAdServer site id",
			token:"sas_site_id",
			uv:"universal_variable.adserver.sas_site_id"
		},{
			name:"page id",
			description:"SmartAdServer page id",
			token:"sas_page_id",
			uv:"universal_variable.adserver.sas_page_id"
		},{
			name:"format id",
			description:"SmartAdServer format id",
			token:"sas_format_id",
			uv:"universal_variable.adserver.sas_format_id"
		},{
			name:"target",
			description:"SmartAdServer target, format : foo:bar;foo1:bar1;foo2:bar2",
			token:"sas_target",
			uv:"universal_variable.adserver.sas_target"
		}]
		/*~DATA*/
	},
	script: function() {
	/*SCRIPT*/
		sas.call(this.valueForToken("sas_call_type"), {
			siteId: this.valueForToken("sas_site_id"),
			pageId: this.valueForToken("sas_page_id"),
			formatId: this.valueForToken("sas_format_id"),
			target: '"'+this.valueForToken("sas_target")+'"'
		});
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
