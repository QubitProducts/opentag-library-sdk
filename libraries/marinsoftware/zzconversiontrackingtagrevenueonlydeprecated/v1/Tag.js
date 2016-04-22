//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"marinsoftware.zzconversiontrackingtagrevenueonlydeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "zz-Conversion Tracking Tag - Revenue only [DEPRECATED]",
			async: true,
			description: "This conversion pixel tracks revenue only. Use either this or the asynchronous Conversion Capture Code depending on the instructions you have been given by Marin.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "Marin Client Id",
				description: "Your unique marin client id",
				token: "clientId",
				uv: ""
			}, {
				name: "Marin Conversion Type Id",
				description: "Each conversion type represents a page on the client’s website which is considered a goal",
				token: "conversionTypeId",
				uv: ""
			}, {
				name: "Order Id",
				description: "A unique id for the order",
				token: "orderId",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "The total value of the order",
				token: "total",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Order currency",
				description: "The order the currency is in. Can be hard coded to GBP if appropriate",
				token: "currency",
				uv: "universal_variable.transaction.currency"
			}],
		categories:[
			"Search Engine"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			window._mf = document.createElement("form");
			_mf.style.display = "none";
			_mf.name = "utmform";

			window._mta = document.createElement("textarea");
			_mta.id = "utmtrans";
			_mta.value = "UTM:T|" + this.valueForToken("orderId") + "||" + this.valueForToken(
				"total") + "|||||\nUTM:I|" + this.valueForToken("orderId") + "|" + this.valueForToken(
				"conversionTypeId") + "|||" + this.valueForToken("total") + "|";

			_mf.appendChild(_mta);
			document.body.appendChild(_mf);

			window._marinTransaction = {
				currency: "" + this.valueForToken("currency")
			};

			window._ml = document.createElement("script");
			_ml.src = "//tracker.marinsm.com/tracker/" + this.valueForToken("clientId") +
				".js";

			window._m_loaded = false;
			window._m_loader = function() {
				if (!_m_loaded) {
					_m_loaded = true;
					document.write = function(pixel) {
						var x = document.createElement("div");
						x.innerHTML = pixel;
						document.body.appendChild(x);
					}
					_marinTrack.processOrders();
				}
			}

			_ml.onload = _m_loader;
			_ml.onreadystatechange = function() {
				if ((this.readyState === "complete") ||
					(this.readyState === "loaded")) {
					_m_loader
				}
			};
			document.body.appendChild(_ml);
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
