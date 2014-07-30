/**ignore at merge**/
//:include tagsdk-current.js
//:include olapic/carouselwidget/v1/Tag.js

/*
 * BDD tests are well known unit tests supporting API used by mocha and
 * other test runners. Please see more info about how to use them online.
 */
var suite = describe("firing a tag", function() {

  var tag = null;

  beforeEach(function() {
    tag = new olapic.carouselwidget.v1.Tag({
      name: "Specify a name here"
    });
  });

  afterEach(function() {

  });

  it("should fail", function() {
    expect(true).to.be(false);
  });

  it("should pass", function() {
    expect(true).to.be(true);
  });

  it("should throw an exception", function() {
    throw "exception!";
  });
});

qubit.opentag.Utils.namespace('olapic.carouselwidget.v1.local.BDDSuite', suite);
