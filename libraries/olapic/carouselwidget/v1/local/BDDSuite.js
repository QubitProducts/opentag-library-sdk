/**ignore at merge**/
//:include tagsdk-current.js
//:include olapic/carouselwidget/v1/Tag.js

/*
 * BDD tests are well known unit tests supporting API used by mocha and
 * other test runners. Please see more info about how to use them online.
 */
var suite = describe("firing a tag", function () {

  var tag = null;

  beforeEach(function () {
    tag = new olapic.carouselwidget.v1.Tag({
      name: "Olapic Test Instance",
      variables: {
        "apikey": {
          value: "123"
        },
        "widgetref": {
          value: "456"
        },
        "elementref": {
          value: "olapic-test"
        },
        "refkey": {
          value: "-"
        },
        "appendat": {
          value: "div"
        }
      }
    });
  });

  afterEach(function () {
    document.querySelectorAll("script[data-olapic='olapic-test']")[0].remove();
    document.querySelectorAll("#olapic-test")[0].remove();
  });

  it("Olapic container <div/> created in the DOM", function () {
    tag.run();
    expect(document.querySelectorAll("#olapic-test").length).to.be(1);
  });

  it("Olapic <script/> tag created in the DOM", function () {
    tag.run();
    expect(document.querySelectorAll("script[data-olapic='olapic-test']").length).to.be(1);
  });

});

qubit.opentag.Utils.namespace('olapic.carouselwidget.v1.local.BDDSuite', suite);