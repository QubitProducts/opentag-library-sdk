/*
 * 
 * Good tests framework. It does simple: passes or fails with asynchronous support.
 * Make your suite, add tests, run it.
 * 
 * Scenariono, create file that will contain your Suite object and test, for example:
 * 
 * var ASuite = new Suite([
 *  function () {
 *    this.name = "I am a very nice test";
 *    //and write your execution code
 *    this.pass(true, "This test just passed.");
 *  }
 * ]);
 * 
 * ASuite.onFinished = function () {
 *    for(var x = 0; x < this.tests.length; x++) {
 *      if (this.test[x].passed) {
 *        console.log("Test " + this.test[x].name + " has passed.");
 *      }
 *    }
 * };
 * 
 * to run tests, simply:
 * 
 * ASuite.run();
 * 
 * 
 * 
 * @author peter fronc <peter.fronc@qubitdigital.com>
 */

/**
 * Test Suite class
 * @param {type} tests
 * @param {type} onfinished
 * @returns {Suite}
 */
function Suite(tests, onfinished) {
  this.tests = [];

  this.log = function(msg) {
    Suite.log("Suite: " + msg);
  };

  if (tests) {
    for (var prop in tests) {
      if (tests.hasOwnProperty(prop)) {
        var test = new Test(tests[prop]);
        test.name = prop;
        this.tests.push(test);
      }
    }
  }

  this._onFinished = function() {
    this.started = false;
    if (this.after) {
      try {
        this.after();
      } catch (e) {
      }
    }
    try {
      if (this.onFinished) {
        this.onFinished();
      }
    } finally {
      if (onfinished) {
        onfinished(this);
      }
    }
  };

  this.run = function(eachTestCallback) {
    if (this.started) {
      this.log("Suite already started running. Please wait till it finish.");
    }
    this.log("Running tests...");
    this.started = true;
    if (this.before) {
      try {
        this.before();
      } catch (e) {
      }
    }
    
    for (var i = 0; i < this.tests.length; i++) {
      this.tests[i].reset();
    }
    
    var _this = this;
    var runNext = function (index) {
      var idx = index;
      if (_this.tests[idx]) {
        if (_this.beforeEach) {
          try {
            _this.beforeEach(_this.tests[idx]);
          } catch (e) {}
        }
        _this.tests[idx].run(function (testInstance) {
          if (_this.aftereEach) {
            try {
              _this.afterEach(testInstance);
            } catch (e) {}
          }
          try { 
             if (eachTestCallback) { 
               eachTestCallback(testInstance);
             }
          } finally {
            setTimeout(function () {runNext(++index);}, 5);
          }
        });
      }
    };
    
    runNext(0);//start chain
    
    this.waitForResults();
  };

  this.raport = function() {
  };

  this.isFinished = function () {
    for (var i = 0; i < this.tests.length; i++) {
      if (!this.tests[i].isFinished()) {
        return false;
      }
    }
    return true;
  };

  this.waitForResults = function() {
    this.finishedTests = [];
    this.failedTests = [];
    this.unfinishedTests = [];
    var notDone = false;

    for (var i = 0; i < this.tests.length; i++) {
      if (this.tests[i].isFinished()) {
        this.finishedTests.push(this.tests[i]);
        if (this.tests[i].failed) {
          this.failedTests.push(this.tests[i]);
        }
      } else {
        notDone = true;
        this.unfinishedTests.push(this.tests[i]);
      }
    }

    if (notDone) {
      var _this = this;
      setTimeout(function() {
        _this.waitForResults();
      }, 50);
    } else {
      this.log("tests are finished.");
      this._onFinished();
    }
  };
}



Suite.log = function (msg) {
  try {
    console.log(msg);
  } catch (e) {}
};







/**
 * Single test class
 * @param {type} test
 * @returns {Test}
 */
function Test(test) {
  this.test = test;

  this.log = function(msg) {
    Test.log("Test[" + this.name + "] " + msg);
  };

  this.reset = function(callback) {
    this.passed = undefined;
    this.failed = undefined;
  };

  /**
   * 
   * @param {type} callback
   * @returns {undefined}
   */
  
  this.run = function(callback) {
    this.reset();
    try {
      test.call(this);
    } catch (ex) {
      this.failed = new Date().valueOf();
      this.log("exception occured: " + ex);
      this.exception = ex;
    }
    this.waitTillFinished(callback);
  };

  this.waitTillFinished = function (callback) {
    if (this.isFinished()) {
      try {
        if (callback) {
          callback(this);
        }
      } finally {
        this._onFinished();
      }
    } else {
      setTimeout(this.waitTillFinished.bind(this), 68);
    }
  };

  this._onFinished = function () {
    if (this.onFinished) {
      try {
        this.onFinished();
      } catch (e) {
      }
    }
  };

  /**
   * 
   * @returns {Boolean}
   */
  this.isFinished = function() {
    if (this.passed !== undefined ||
            this.failed !== undefined) {
      return true;
    }
    return false;
  };

  /**
   * Fail
   * @param {type} condition
   * @param {type} message
   * @returns {undefined}
   */
  this.fail = function(condition, message) {
    this.pass(!condition, message);
  };

  /**
   * Pass
   * @param {type} condition
   * @param {type} message
   * @returns {pass}
   */
  this.pass = function(condition, message) {
    if (condition) {
      this.log("passed: " + message);
    } else {
      this.log("failed: " + message);
      this.failed = new Date().valueOf();
    }

    if (!this.failed && !this.passed) {
      this.log("Test failed !");
      this.passed = new Date().valueOf();
    }
  };
}

Test.log = function (msg) {
  try {
    console.log(msg);
  } catch (e) {}
};

window.Suite = Suite;
window.Test = Test;