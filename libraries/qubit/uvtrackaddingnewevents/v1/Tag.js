//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.uvtrackaddingnewevents.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "UV - track adding new events",
		async: true,
		description: "With this library tag it is possible to listen for events being added to the Universal Variable events parameter. Useful if you want to have multiple event trackers working off the same model. \n\nExample: uv.events.on('add', function () {\n  // run your code here\n});\n\nIf you have any trackers running off this tag, ensure that this tag is set as a dependency for them.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		],
		categories:[
			"Web Utilities / JavaScript Tools"
		]

		/*~config*/
		};
	},
	script: function() {
		/*script*/
		// Create UV events array if doesn't exist
		window.universal_variable = window.universal_variable || {};
		var uv = window.universal_variable;
		uv.events = uv.events || [];
		uv.events._cb = uv.events._cb || {};

		// Create the on function for listening
		uv.events.on = function(eventName, cb) {
			uv.events._cb = uv.events._cb || {};
			var cbs = uv.events._cb;
			cbs[eventName] = cbs[eventName] || [];
			cbs[eventName].push(cb);
		};

		// Override push
		uv.events.push = function(event) {
			uv.events[uv.events.length] = event;
			event.time = event.time || (new Date()).getTime();
			if (window.universal_variable.events._cb.add) {
				var i = 0,
					ii = uv.events._cb.add.length;
				for (; i < ii; i += 1) {
					uv.events._cb.add[i](event);
				}
			}
		};
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
