/**ignore at merge**/
//:import sdk.releases.Current
//:include qubit/uvbreadcrumbconverter/v1/Tag.js

/*
 * BDD tests are well known unit tests supporting API used by mocha and
 * other test runners. Please see more info about how to use them online.
 */
var suite = describe("firing a tag", function() {

  var tag = null;

  beforeEach(function() {
    tag = new qubit.uvbreadcrumbconverter.v1.Tag({
      skip_first: true,
      skip_last: false
    });
  });

  afterEach(function() {

  });

  it("should remap page.type to page.category", function() {
    expect(window.universal_variable.page.category).to.be(window.universal_variable.page.type.toLowerCase());
  });

});

qubit.opentag.Utils.namespace('qubit.uvbreadcrumbconverter.v1.local.BDDSuite', suite);
