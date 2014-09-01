(function () {
  Function.prototype.bind = Function.prototype.bind || function (ctx) {
    var _this = this;
    return function () {
      return _this.apply(ctx, arguments);
    };
  };
}());

var global = this;
try {
  global = (false || eval)("this") || (function() {
    return this;
  }()) || window;
} catch (e) {
}

global.NAMESPACE = global;
global.VERSION = "0.0.1";

//shortcuts
var EMPTY_FUN = function() {
};
var UNDEF = undefined;

global.APP_PATH = global.APP_PATH || "/";
global.LIBRARIES_REPO_LOC = global.LIBRARIES_REPO_LOC || "/";


/*
 * Opentag, a tag deployment platform
 * Copyright 2013-2014, Qubit Group
 * http://opentag.qubitproducts.com
 * Author: Peter Fronc <peter.fronc@qubitdigital.com>
 */

(function () {
  
  /**
   * @class Utils
   * @singleton
   * 
   * #Generic Utility
   * 
   * It delivers utility tools for copying or traversing objects, acessing
   * and manipulating CSS class names, managing arrays, creating classes and
   * many more useful utilities. Please see the API.
   * 
   */
  function Utils() {}

  var global = null;
  try {
    global = (false || eval)("this") || (function () { return this; }());
  } catch (e) {}
  
  /**
   * Global scope accessor.
   * @returns {Object}
   */
  Utils.global = function () {
    return global;
  };

  /**
   * Function builds desired name space.
   * It will not override existing elements.
   * @param {String} path
   * @param {Object} instance
   * @param {Object} pckg
   * @param {Boolean} noOverride
   * @returns {Object}
   */
  Utils.namespace = function (path, instance, pckg, noOverride) {
    var files = path.split("."),
      //access eval INDIRECT so it is called globally
      current = Utils.NAMESPACE_BASE || (function () {return eval("this"); }()),
      last = null,
      lastName = null,
      i;
    
    current = pckg || current;
    
    for (i = 0; i < files.length - 1; i += 1) {
      last = current;
      lastName = files[i];
      current[lastName] = current[lastName] || {};
      current = current[lastName];
    }
    
    last = current;
    lastName = files[files.length - 1];
    
    if (instance !== undefined) {
      if (last[lastName] === undefined || !noOverride) {
        last[lastName] = instance;
      }
    } else {
      last[lastName] = last[lastName] || {};
    }
    
    return last[lastName];
  };

  /**
   * Utility for simple class declaration (not definition).
   * It does similiar job as namespace with addition of adding CLASS_NAME
   * and PACKAGE_NAME on prototype. It also sets superclass to extending class
   * instance.
   * 
   * @param {String} path
   * @param {Object} instance
   * @param {Function} extendingClass
   * @param {Object} pckg
   * @param {Object} config
   * @returns {Object} the class instance
   */
  Utils.clazz = function (path, instance, extendingClass, pckg, config) {
    Utils.namespace(path, instance, pckg, true);
    if (typeof(extendingClass) === "function") {
      instance.superclass = extendingClass;
      instance.prototype = new instance.superclass(config);
    }
    if (instance.prototype) {
      var names = path.split(".");
      instance.prototype.CLASS_NAME = names[names.length - 1];
      names.splice(names.length - 1, 1);
      instance.prototype.PACKAGE_NAME = names.join(".");
    }
    return instance;
  };

  Utils.clazz("Utils", Utils);
  
  /**
   * Function resolving string with classpath to object addressed.
   * @param {String} path
   * @param {Object} base
   * @returns {Object}
   */
  Utils.getObjectUsingPath = function (path, base) {
    base = base || global;
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (base && parts[i]) {
        base = base[parts[i]];
      }
    }
    return base;
  };
  Utils.ANON_VARS = [];
  /**
   * Function will create anonymous accessro string that when evaluated returns
   * object reference to object passed as a argument.
   * @param {Object} obj
   * @returns {String}
   */
  Utils.getAnonymousAcessor = function (obj) {
    var index = Utils.indexInArray(obj, Utils.ANON_VARS);
    if (index === -1) {
      index = addAnonymousAcessor(obj);
    }
    
    return "Utils.ANON_VARS[" + index + "]";
  };
  
  /**
   * Function adding an object to anonymous accessors array.
   * Strictly private.
   * @private
   * @param {Object} obj
   * @returns {Number}
   */
  function addAnonymousAcessor (obj) {
    return Utils.addToArrayIfNotExist(Utils.ANON_VARS, obj);
  };

  // GENERIC
  
  /**
   * Function replacing all matching instances of regex "patterns" in "string" 
   * with "replace" string.
   * 
   * Very useful wrapper.
   * 
   * @param {String} string
   * @param {String} pattern regex
   * @param {String} replace replacement string
   * @returns {String} results
   */
  Utils.replaceAll = function (string, pattern, replace) {
    return string.replace(new RegExp(pattern, 'g'), replace);
  };
  
  /**
   * Make text secure for innerHTML.
   * Function is quickly securing text so it's parts will not be html 
   * interpreted with `innerHTML` methods.
   * @param {String} string
   * @returns {String} String stripped from &lt; and &gt; chars.
   */
  Utils.secureText = function (string) {
    if (typeof (string) !== "string") {
      string += "";
    }
    string = Utils.replaceAll(string, "<", "&lt;");
    string = Utils.replaceAll(string, ">", "&gt;");
    return string;
  };

  /**
   * Utility method getting the browser's URL.
   * @returns {String} document.location.href value
   */
  Utils.getUrl = function () {
    return document.location.href;
  };

  /**
   * Function gets url query parameters value.
   * 
   * @param {String} param
   * @returns {String}
   */
  Utils.getQueryParam = function (param) {
    var i, ii, params, url, query, queries, splitQuery;
    url = Utils.getUrl();
    if (url.indexOf("?") > 0) {
      queries = url.substring(url.indexOf("?") + 1).split("&");
      for (i = 0, ii = queries.length; i < ii; i += 1) {
        query = queries[i];
        if (query.indexOf("=") > 0) {
          splitQuery = query.split("=");
          if ((splitQuery.length === 2) && (splitQuery[0] === param)) {
            return splitQuery[1];
          }
        }
      }
    }
    return null;
  };

  /**
   * Function gets DOM Element text value (not inner HTML value).
   * @param {String} elementId
   * @returns {String} string value or null if element is invalid
   */
  Utils.getElementValue = function (elementId) {
    var el = document.getElementById(elementId);
    if (el) {
      return el.textContent || el.innerText;
    }
    return null;
  };
  
  //private helper for objectCopy
  var travelArray = [];
  function existsInPath(object, copy) {
    var len = travelArray.length;
    for (var i = 0; i < len; i++) {
      if (object === travelArray[i][0]) {
        return travelArray[i][1];
      }
    }
    
    travelArray[travelArray.length] = [object, copy];

    return false;
  }
  /**
   * Copy object.
   * deep option must be passed to protect from circural references.
   * 
   * Note that functions are treated as objects and some global scope objects
   *  are excluded from traversing.
   *  
   *  **Remember: by default DOM node and window element types are excluded
   *  from inclusion as they hage enormous properties tree contents - function 
   *  does circural checks but still the object is enormous.**
   *  
   * @param {Object} obj object to copy
   * @param cfg Configuration object:
   * 
   * - {Number} maxDeep how deep to enter to copy object
   * 
   * - {Boolean} nodes If enabled, it follow Node elements refernces
   *   and window.
   *   
   * - {Boolean} noOwn property if set cause excluding default "hasOwnProperty"
   * check.
   * 
   * - {Boolean} noFunctions If enabled, it excludes functions from copying
   * 
   * - {Boolean} proto If enabled, it ewill include `prototype` object(!), 
   * useful when cloning with inheritance.
   * 
   * - {Boolean} copyReference If enabled, it will set for
   *    each object "___copy_reference" property referring to copied object
   * 
   * - {Boolean} all This config option causes setting defaults to include any 
   * tupoe of objects in traversing process (win. nodes, etc. are set to true)
   * @returns {Object} copy of the object
   */
  Utils.objectCopy = function (obj, cfg) {
    cfg = cfg || {};
    var res = _objectCopy (obj, cfg, cfg.maxDeep);
    travelArray = [];
    return res;
  };
  
  function _objectCopy(obj, cfg, maxDeep, start, parentObj) {
    var nodes = false,
      noOwn = false,
      noFunctions = false,
      win = false,
      all = false,
      copyReference = false;
    
    if (cfg) {
      all = !!cfg.all;
      nodes = all || cfg.nodes;
      win = all || cfg.win;
      noOwn = all;
      noFunctions = cfg.noFunctions && !all;
      
      if (cfg.noOwn !== undefined) {
        noOwn = !!cfg.noOwn;
      }      
      if (cfg.noFunctions !== undefined) {
        noFunctions =  !!cfg.noFunctions;
      }
      if (cfg.win !== undefined) {
        win = !!cfg.win;
      }
      if (cfg.nodes !== undefined) {
        nodes = !!cfg.nodes;
      }
      
      copyReference = !!cfg.copyReference;
    }
    
    if (maxDeep !== undefined && !maxDeep) {
      return;
    } else if (maxDeep !== undefined) {
      maxDeep--;
    }

    if (!obj || !(obj instanceof Object)) {
      return obj;
    }

    if (!nodes) {
      try {
        if (obj instanceof Node) {
          return obj;
        }
      } catch (ie) {
        if (obj instanceof ActiveXObject && obj.nodeType !== undefined) {
          return obj; //IE case, no comment
        }
      }
      if (obj === document) {
        return obj;
      }
    }
    
    if (!win) {
      if (obj === window || obj === global) {
        return obj;
      }
    }

    var copy = (obj instanceof Array) ? [] : {};

    if (obj instanceof Date) {
      copy = new Date(obj);
    }

    if (!noFunctions && obj instanceof Function) {
      var funStr = String(obj).replace(/\s+/g,"");
      if ((funStr.indexOf("{[nativecode]}") + 14) === funStr.length) {
        //native case
        copy = function() {
          return obj.apply(parentObj || this, arguments);
        };
      } else {
        copy = function() {
          return obj.apply(this, arguments);
        };
      }
    }

    if (start === undefined) {
      travelArray = [];
      start = 0;
    }
    
    var existingCopy = existsInPath(obj, copy);
    
    if (existingCopy) {
      return existingCopy;
    }
    
    // DONT follow native accessors!: obj[i] === obj[i]
    
    var i;
    if (copy instanceof Array) {
      for (i = 0; i < obj.length; i++) {
        if (obj[i] === obj[i]) {
          copy[copy.length] = _objectCopy(obj[i], cfg, maxDeep, start + 1, obj);
        } else {
          copy[copy.length] = obj[i];
        }
      }
    } else {
      i = 0;
      for (var prop in obj) {
        if (noOwn || obj.hasOwnProperty(prop)) {
          if (obj[prop] === obj[prop]) {
            copy[prop] = _objectCopy(obj[prop], cfg, maxDeep, start + 1, obj);
          } else {
            copy[prop] = obj[prop];
          }
        }
        i++;
      }
    }
    
    if (cfg.proto) {
      copy.prototype = _objectCopy(obj.prototype, cfg, maxDeep, start + 1, obj);
    }
    
    if (copyReference) {
      copy.___copy_ref = obj;
    }
    
    return copy;
  }
  
  var traverseArray = [];
  function existsInTraversePath(object, max) {
    for (var i = 0; i < max && i < traverseArray.length; i++) {
      if (object === traverseArray[i]) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Function used to traverse through an object and its properties.
   * 
   * Execution function `exe` will be called on each object's property:
   * 
         exe(obj, parent, propName, trackPath)
   * 
   * Where obj is the objects propery reference, parent is the parent object 
   * reference, propName is the property name and trackPath is a fully qualified
   * classpath leading to this object's property.
   * 
   * @param {Object} obj
   * @param {Function} exe
   * @param {Object} cfg Optional configuration object with possible properties:
   * 
   * - `objectsOnly` only properties that are Objects
   * 
   * - `maxDeep` how deep to penetrate
   * 
   * - `hasOwn` checking if `hasOwnProperty` should be applied 
   *    (only own properties) (default true)
   *    
   * - `nodes` if DOM nodes should be included in traverse (default false)
   */
   Utils.traverse = function (obj, exe, cfg) {
     _traverse(obj, exe, cfg);
   };
   
   function _traverse(obj, exe, cfg, start, parent, prop, trackPath) {
    cfg = cfg || {};
    
    if (cfg.hasOwn === undefined) {
      cfg.hasOwn = true;
    }
    
    if (cfg.objectsOnly && !(obj instanceof Object)) {
      return;
    }
    
    if (cfg.maxDeep !== undefined && !cfg.maxDeep) {
      return;
    } else if (cfg.maxDeep !== undefined) {
      cfg.maxDeep--;
    }
    
    if (!cfg || !cfg.nodes) {
      try {
        if (obj instanceof Node) {
          //dont follow those objects
          return;
        }
      } catch (ie) {
        if (obj instanceof ActiveXObject && obj.nodeType !== undefined) {
          return; //IE case, no comment
        }
      }
    }
    if (obj === window || obj === global) {
      //dont follow those objects
      return;
    }

    if (start === undefined) {
      traverseArray = [];
      start = 0;
    }
    
    if (existsInTraversePath(obj, start)) {
      return;
    }

    traverseArray[start] = obj;
    parent = parent || obj;
    
    if (parent && prop && (parent[prop] !== parent[prop])) {
      //live getters will be ommited
      return;
    }
    
    var stopHere = exe(obj, parent, prop, trackPath);
    
    if (stopHere) {
      return;
    }
    
    var i = 0;
    var objPath = "";
    for (var pprop in obj) {
      if (!cfg.hasOwn || (obj.hasOwnProperty(pprop))) {
        try {
          var object = obj[pprop];
          if (cfg.track) {
            objPath = trackPath ? (trackPath + "." + pprop) : pprop;
          }
          _traverse(object, exe, cfg, start + 1, parent, pprop, objPath);
        } catch (e) {}
      }
      i++;
    }
  };

  /**
   * Prepares string to be quoted and evaluable.
   * @param {String} string
   * @returns {String} quoted string or the input parameter if parameter is not
   * a string.
   */
  Utils.prepareQuotedString = function (string) {
    if (typeof(string) === "string") {
      return "\"" + (string.replace(/\"/g, "\\\"")) + "\"";
    } else {
      return string;
    }
  };

/**
 * Converts a string expression to a function.
 * 
 * @param {String} expr expression used for function
 * @param {String} argzString optional arguments part string, example: 
 * "arg1, arg2"
 * @returns {Function} function made from expression block
 */
  Utils.expressionToFunction = function (expr, argzString) {
    argzString = argzString || "";
    var funTemplate = "function (" + argzString + ") {" + expr + "}";
    return Utils.gevalAndReturn(funTemplate).result;
  };
  
  /**
   * Utility for class creation.
   * 
   * @param {Object} config object with properties to be set on prototype.
   *    CONSTRUCTOR property (function) is a special property on such object and
   *     will be used to create constructor - optional. 
   * @param {String} classPath classpath to be used and set at
   * @param {Function} extendingClass class to inherit from
   * @returns {Object} defined class reference
   */
  Utils.defineClass = function (classPath, extendingClass, config) {
    
    var names = classPath.split(".");
    var className = names[names.length - 1];
    
    //create class
    //@TODO create eval fix and do proper wrap.
    var clazz;
    var funTemplate = "(function " + className + "() {" +
      "  if (" + classPath + "._CONSTRUCTOR) {" +
      "    return " + classPath + "._CONSTRUCTOR.apply(this, arguments);" +
      "  } else {" +
      "    if (" + classPath + ".superclass) {" +
      "      return " + classPath + ".superclass.apply(this, arguments);" +
      "    }" + 
      "  }" +
      "})";
    
    clazz = Utils.gevalAndReturn(funTemplate).result;

//or anonymous:
//    var clazz = function () {
//      if (CONSTR) {
//         CONSTR.apply(this, arguments);
//      } else if (clazz.superclass) {
//        clazz.superclass.apply(this, arguments);
//      }
//    };

    var CONSTRUCTOR = config.CONSTRUCTOR;
    
    clazz._CONSTRUCTOR = CONSTRUCTOR;
    clazz.superclass = extendingClass;
    
    //publish class
    Utils.clazz(classPath, clazz, extendingClass);
    
    //pass prototype objects
    for (var prop in config) {
      if (config.hasOwnProperty(prop) && prop !== "CONSTRUCTOR") {
        clazz.prototype[prop] = config[prop];
      }
    }
    return clazz;
  };
  
  /**
   * Important compat utility for keys at object listing.
   * @param {Object} obj
   * @returns {Array} keys array from object.
   */
  Utils.keys = function (obj) {
    if (obj instanceof Object) {
      if (Object.keys) {
        return Object.keys(obj);
      }
      var keys = [];
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          keys[keys.length] = prop;
        }
      }
      return keys;
    } else {
      throw "keys() called on non-object!";
    }
  };


  /**
   * Cross-browser source element resolving function from DOM event object.
   * 
   * @param {Object} evt
   * @returns {Element}
   */
  Utils.getSrcElement = function (evt) {
    var elem;
    evt = evt || window.event;
    if (evt.srcElement) {
      elem = evt.srcElement;
    } else if (evt.target) {
      elem = evt.target;
    }
    return elem;
  };

  /*
   * Local function taking as argument and array and a string that will be 
   * added to the array if it does not equal (===) to any of items.
   * 
   * @param {Array} array
   * @param {Object} obj
   * @returns {Number} objects position in array,
   *  if doesnt exist it will return -1. It means that object was appended at 
   *  the end of array.
   * if exists it will return its popsition.
   */
  Utils.addToArrayIfNotExist = function (array, obj) {
    var i = 0, exists = false;
    for (; i < array.length; i += 1) {
      if (array[i] === obj) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      array[array.length] = obj;
      i = -1;
    }
    return i;
  };
  
  /*
   * Local function taking as argument and array and a string that will be 
   * added to the array if it does not equal (===) to any of items.
   * 
   * @param {Array} array
   * @param {Object} obj
   * @returns {Number} objects position in array,
   *  if doesnt exist it will return -1. It means that object was appended at 
   *  the end of array.
   * if exists it will return its popsition.
   */
  Utils.indexInArray = function (array, obj) {
    var i = 0, exists = false;
    for (; i < array.length; i++) {
      if (array[i] === obj) {
        exists = true;
        break;
      }
    }
    return exists ? i : -1;
  };
  
  /*
   * Local function taking as argument and array and a string that will be  
   * removed from the array if it equals (===) to any of array items.
   * 
   * @param {Array} array
   * @param {Object} obj
   */
  Utils.removeFromArray = function (array, obj) {
    var i = 0;
    for (; i < array.length; i += 1) {
      if (array[i] === obj) {
        array.splice(i, 1);
      }
    }
  };
  
  /**
   * Cross browser add className wrapper.
   * Nowadays, browsers support "classList" property - still not all of them.
   * 
   * @param {Element} node
   * @param {String} name
   */
  Utils.addClass = function (node, name) {
    var classes;
    try {
      node.classList.add(name);
    } catch (ex) {
      if (node.className === null) {
        node.className = name;
        return;
      }
      classes = node.className.split(" ");
      Utils.addToArrayIfNotExist(classes, name);
      node.className = classes.join(" ");
    }
  };
  
  /**
   * Cross browser remove className wrapper.
   * Nowadays, browsers support "classList" property - still not all of them.
   * 
   * @param {Element} node
   * @param {String} name
   */
  Utils.removeClass = function (node, name) {
    var classes;
    try {
      node.classList.remove(name);
    } catch (ex) {
      if (node.className === null) {
        node.className = "";
        return;
      }
      classes = node.className.split(" ");
      Utils.removeFromArray(classes, name);
      node.className = classes.join(" ");
    }
  };
  
  /**
   * Evaluates expression and returns value of wrapped by "(" expression ")".
   * @param {String} expression
   * @returns {Object}
   */
  Utils.gevalAndReturn = function (expression) {
    Utils.gevalAndReturn.___var_test___ = undefined;
    Utils.gevalAndReturn.___var_test___error = undefined;
    expression  =
            "try{Utils.gevalAndReturn.___var_test___=(" +
            expression +
            ");}catch(ex){" +
            "Utils.gevalAndReturn.___var_test___error = ex;" +
            "}";
    Utils.geval(expression);
    return {
      result: Utils.gevalAndReturn.___var_test___,
      error: Utils.gevalAndReturn.___var_test___error
    };
  };
  
  /**
   * Trim function for string.
   * @param {String} string
   * @returns {String} result
   */
  Utils.trim = function (string) {
    try {
      return String(string).trim();
    } catch (noTrim) {
      return String(string).replace(/^\s+|\s+$/g, '');
    }
  };
  
  /**
   * Utility useful to apply default values on config objects, it sets
   * values from src on obj if unset on obj.
   * @param {Object} obj object to set on
   * @param {Object} src object to set from
   */
  Utils.setIfUnset = function (obj, src) {
    if (obj && src) {
      for (var prop in src) {
        if (src.hasOwnProperty(prop) && !obj.hasOwnProperty(prop)) {
          obj[prop] = src[prop];
        }
      }
    }
  };
  
  /**
   * Global eval function.
   * It evaluates expression in a global scope.
   * @param {String} expression
   */
  Utils.geval = function (expression) {
    if (window && window.execScript) {
      window.execScript(expression);
    } else {
      (function () {return global["eval"].call(global, expression); }());
    }
  };
  
  var _readyCalls = [];
  var _loaded = false;
  /**
   * Function checks if body exists and document state is complete.
   * It accepts also callback which is run immediately if body exists and is 
   * loaded or will be called when body is loaded (window.onload time).
   * 
   * Use this method to run code when body is loaded.
   * 
   * @param {Function} callback
   * @returns {Boolean} true and only true if body and state is complete is available.
   */
  Utils.bodyReady = function(callback) {
    if (_loaded) {
      if (callback) {
        callback();
      }
      return true;
    }

    _loaded = !!(document.body && document.readyState === "complete");

    if (_loaded) {
      for (var i = 0; i < _readyCalls.length; i++) {
        try {
          _readyCalls[i]();
        } catch (ex) {



        }
      }
      if (callback) {
        callback();
      }
    } else {
      if (callback) {
        _readyCalls.push(callback);
      }
    }

    return _loaded;
  };
  
  //@TODO maybe loop will be more "smooth" choice, review it.
  var oldOnload = global.onload;
  global.onload = function (e) {
    Utils.bodyReady();
    if (oldOnload) {
      oldOnload(e);
    }
  };
  
}());

function fitTextarea(txta) {
  if (txta.tagName.toLowerCase() === "textarea") {
    txta.style.overflow = 'hidden';//IE...
    txta.style.height = "0px";
    txta.scrollHeight;//...workaround
    txta.style.height = (25 + txta.scrollHeight) + "px";
    txta.style.overflow = '';//...
  }
}

function nextNode(from) {
  while (!from.tagName) {
    from = from.nextSibling;
  }
  return from;
}

function toggleShowSibling(start, nxt) {
  var next = nxt || start.nextSibling;
  while (next && !next.style) {
    next = next.nextSibling;
  }

  if (next) {
		var plus = false;
    var cmEditorAttachedAndHidden =
            next.cmNode && next.cmNode.style.display === "none";
    if (cmEditorAttachedAndHidden) {
      next.cmNode.style.display = "";
			plus = true;
    } else if (!next.cmNode && next.style.display === "none") {
      next.style.display = "";
			plus = true;
      if (next.tagName === "TEXTAREA") {
        attachEditor(next);
      }
      fitTextarea(next);
    } else {
      next.style.display = "none";
      if (next.cmNode) {
        next.cmNode.style.display = "none";
      }
    }
		
		var plusNode = start.children[0];
		if (plusNode && plusNode.getAttribute("plus") === "true") {
			if (plus) {
				plusNode.innerHTML = "-";
			} else {
				plusNode.innerHTML = "+";
			}
		}
  }
}

function attachEditor(node) {
  node.cm = CodeMirror.fromTextArea(node, {
        lineNumbers: true,
        mode: "javascript",
        theme: "ambiance",
        tabMode: "indent",
        matchBrackets: true,
				extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
				foldGutter: true,
				gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
      });
  node.cm.on("change", function() {
    node.value = node.cm.getValue();
  });
  node.cmNode = node.nextSibling;
}

function getParametersAndConfigForTagNode(referencingNode, ignoreRed, paramsOnly) {
  var inputs = referencingNode.getElementsByTagName("input");
  var tagRef = referencingNode.reference;
  var config = tagRef.config;
  for (var i = 0; i < inputs.length; i++) {
    if (!ignoreRed) {
      if (inputs[i].className.indexOf("red") !== -1) {
        return "red";
      }
    }

    if (inputs[i].pindex !== undefined) {
      var idx = inputs[i].pindex;
      config.parameters[idx].inputVariable = inputs[i].value;
			config.parameters[idx].variable = undefined;
      if (inputs[i].value) {
        try {
          var variable = qubit.opentag.Utils.gevalAndReturn(inputs[i].value);
					variable = variable ? variable.result : variable;
          config.parameters[idx].variable = {
            value: variable
          };
        } catch (ex) {
          logError("Error reading configuration" + ex);
        }
      }
    } else if (!paramsOnly && inputs[i].cname !== undefined) {
      config[inputs[i].cname] = inputs[i].value;
    }
  }
  
  if (paramsOnly) {
    return {parameters: config.parameters};
  }
  return config;
}

function applyParametersAndConfigToTag(config, results) {
    config.parameters = results.parameters;
    for (var prop in results) {
      config[prop] = results[prop];
    }
}

function classPath(string) {
  if (string) {
    var chunks = string.split(".");
    for (var i = 0 ; i< chunks.length; i++) {
        var chunk = chunks[i];
				chunk = chunk.replace(/\s+/g,"_");
        chunk = chunk.replace(/[\W+]/g, "");
        if (chunk.match(/^\d+/)) {
					chunk = "_" + chunk;
				}
        chunks[i] = chunk;
    }
    var result = chunks.join(".");
    return result
            .replace(/^[\.]+/g, "")
            .replace(/[\.]+$/g, "")
            .replace(/\.+/g,".");
  } else {
    return string;
  }
}

function getLibraryReferenceNode(node) {
  while(node !== null && !node.reference) {
    node = node.parentNode;
  }
  return node;
}

window.__tmp__qubit__test_page_8_ = null;
function extractFunctionOrString(expr) {
  var nexpr = qubit.opentag.Utils.trim(expr);
  if (nexpr.indexOf("function") === 0) {
    qubit.opentag.Utils.geval("window.__tmp__qubit__test_page_8_=" + nexpr);
    return window.__tmp__qubit__test_page_8_;
  } else {
    return expr;
  }
}

//============== XHR ==========
var IS_IE = false;
if (navigator.appName.indexOf("Internet Explorer") !== -1) {
  IS_IE = true;
}

function getXMLHttpRequest() {
  var request;
  try {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        request = new XMLHttpRequest();
      } catch (e) {
        throw "Your browser does not support AJAX!";
      }
    }
  }
  if (!IS_IE) {
    request.onerror = function onerror() {
      //("Loading Error occured, check your connection and try again.");
    };
  } else {
    window.onerror = function onerror() {
      //("Loading Error occured, check your connection and try again.");
    };
  }
  return request;
}

function GET(url, callback, async) {
  var xmlhttp = getXMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      callback(xmlhttp.responseText, xmlhttp);
    }
  };
  async = (async === undefined) ? true : async;
  try {
    xmlhttp.onerror = function (e) {
      logError("Error while sending GET:" + e);
    };
  } catch (ex) {}

//  xmlhttp.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
//  xmlhttp.setRequestHeader("Pragma", "no-cache");
  var addr = fakeParam(url);
	xmlhttp.open("GET", addr , async);
  xmlhttp.send();
}

function POST(url, data, callback, async) {
  var xmlhttp = getXMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      callback(xmlhttp.responseText, xmlhttp);
    }
  };
  async = (async === undefined) ? true : async;
  try {
    xmlhttp.onerror = function (e) {
      logError("Error while sending POST:" + e);
    };
  } catch (ex) {}
//  xmlhttp.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
//  xmlhttp.setRequestHeader("Pragma", "no-cache");
  var addr = fakeParam(url);
  xmlhttp.open("POST", addr, async);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(data);
}

function fakeParam(url) {
  if (url && url.lastIndexOf('?') !== -1) {
    return url + '&fparam=' + (new Date().getTime()) * Math.random();
  } else {
    return url + '?fparam=' + (new Date().getTime()) * Math.random();
  }
}

/* codes
 !,      *       '       (       )       ;       :       @       &       =       +       $       ,       /       ?       %       #       [       ]
 %21     %2A     %27     %28     %29     %3B     %3A     %40     %26     %3D     %2B     %24     %2C     %2F     %3F     %25     %23     %5B     %5D
 */
//function encodeAmp(str) {
//  return str.replace('\\', ' ', 'g')
//            .replace('|', '%7C', 'g')
//            .replace('%', '%25', 'g')
//            .replace('&', '%26', 'g')
//            .replace('+', '%2B', 'g');
//}


//progres bar
function theProgressBar(title, updater) {
  var progressRunning = false;
  var progressBarTemplate = document.getElementById("progress-bar-template").innerHTML;
  if (progressRunning) {
    return false;
  }
  theProgressBar.title = title;
  progressRunning = true;
  var e = document.createElement("div");
  e.className = "progress-bar";
  e.innerHTML = progressBarTemplate;
  document.body.appendChild(e);
  e.bar = e.children[0].children[0];
  e.titleNode = e.bar.children[0];
  e.titleNode.innerHTML = theProgressBar.title;
  e.progress = e.bar.children[1];
  var checkAgainProgress = function () {
    var val = updater();
    if (val >= 100) {
      e.titleNode.innerHTML = theProgressBar.title + " 100% Done.";
      e.progress.style.width = "100%";
      setTimeout(function () {
        progressRunning = false;
        document.body.removeChild(e);
      }, 200);
    } else {
      e.titleNode.innerHTML = theProgressBar.title + " " + Math.floor(val) + "%";
      e.progress.style.width = Math.floor(val) + "%";
      setTimeout(checkAgainProgress, 20);
    }
  };
  checkAgainProgress();
  return true;
}

function qconsole() {
  this.init = function () {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    var consoleTemplate = document.getElementById("console-template").innerHTML;
    this.container = document.createElement("div");
    this.container.className = "qconsole";
    this.container.innerHTML = consoleTemplate;
    this.msgContainer = this.container.children[1];
    document.body.appendChild(this.container);
    this.msgContainer.scrollTop = this.msgContainer.scrollHeight;
    
    var _this = this;
    
    this.container.ondblclick = function () {
      info("[double click] Clearing & hiding console...");
      _this.clear();
      _this.hide();
    };
  };

  this.log = function (msg) {
    var consoleMsgTemplate = document.getElementById("console-msg-template").innerHTML;
    var e = document.createElement("div");
    e.className = "msg";
    e.innerHTML = consoleMsgTemplate;
    e.msg = e.children[1];
    e.header = e.children[0];
    e.msg.innerHTML = " >>> " + msg;
    this.msgContainer.appendChild(e);
    this.msgContainer.scrollTop = this.msgContainer.scrollHeight;
  };

  this.clear = function () {
    this.msgContainer.innerHTML = "";
  };
  
  this.show = function () {
    qubit.opentag.Utils.addClass(this.container, "shown");
    qubit.opentag.Utils.removeClass(this.container, "hidden");
    this.hidden = false;
  };
  
  this.hide = function () {
    qubit.opentag.Utils.removeClass(this.container, "shown");
    qubit.opentag.Utils.addClass(this.container, "hidden");
    this.hidden = true;
  };
  this.init();
}


function runTagHandler(referencingNode) {
	var configWithParams = getParametersAndConfigForTagNode(referencingNode);

	if (configWithParams === "red") {
		logError("Please fill all highlighed parameter values.\n " +
				"They are required for tag to run.", 2000);
		return;
	}
	
	var tagRef = referencingNode.reference;
	var url = APP_PATH + "getClassPath?classPath=libraries." +
			tagRef.PACKAGE_NAME + ".local&file=UVConf.js";
	
	GET(url, function (message, xhr) {
		var evalIt = true;
		if (xhr.status !== 200) {
			evalIt = false;
      log("UVConfig not found. Proceeding normally.");
    }
		try {
			if (evalIt) {
				log("Evaluating UVConf.js from " + url); 
				qubit.opentag.Utils.geval(message);
			}
		} catch (ex) {
			error("Exception while running UVConf.js: " + ex);
		} finally {
			runTag(referencingNode, configWithParams);
		}
	});
	 
}
function runTag(referencingNode, configWithParams) {
  try {
    var config = {};
    var clazz = referencingNode.classReference;
    var tagRef = referencingNode.reference;
    
    applyParametersAndConfigToTag(config, configWithParams);

		try {
			var params = config.parameters;
			for (var i = 0; i < params.length; i++) {
				var param = params[i];
				for (var j = 0; j < tagRef.config.parameters.length; j++) {
					var oldParam = tagRef.config.parameters[j];
					if (oldParam.token === param.token) {
						param.uv = oldParam.uv;
						break;
					}
				}
			}
		} catch (ex) {
			
		}

    var preVal = tagRef.preNode.value;
    if (String(preVal) !== tagRef.config.pre &&
            String(preVal) !== String(tagRef.pre)) {
      config.pre = extractFunctionOrString(preVal);
    }

    var postVal = tagRef.postNode.value;
    if (String(postVal) !== tagRef.config.post &&
            String(postVal) !== String(tagRef.post)) {
      config.post = extractFunctionOrString(postVal);
    }

    var scriptVal = tagRef.scriptNode.value;
    if (String(scriptVal) !== tagRef.config.script &&
            String(scriptVal) !== String(tagRef.script)) {
      config.script = extractFunctionOrString(scriptVal);
    }

    var instance = new clazz(config);
    info("triggering run() for " + instance.config.name + " ...");
    instance.run();
    var message = "Currently executed tag instance is exposed as <pre>window.instance<pre>";

    info(message + "Please open web console to see more logs." +
				"<br/>To view library the logs run:<pre>instance.log.rePrint(5);</pre>" +
				"in web console.", 5000);
    window.instance = instance;
  } catch (ex) {
    logError("Error while executing configuration:" + ex);
  }
}

function saveConfig(refNode) {
  refNode = getLibraryReferenceNode(refNode);
  var tagRef = refNode.reference;
  var params = getParametersAndConfigForTagNode(refNode, true, true);
  
  //rm variables! it must save basics
  for (var i = 0; i < params.parameters.length; i++) {
    params.parameters[i].variable = undefined;
    delete params.parameters[i].variable;
  }
  
  var serial = json.serialize({parameters: params.parameters}, {prettyPrint: true});
  var newPackageName = tagRef.PACKAGE_NAME + ".local";
  var mkpackage = "qubit.opentag.Utils.namespace('" + newPackageName + "');\n";
  var cfgData = encodeURIComponent(
					"//:inc" + "lude tagsdk-current.js\n" + mkpackage + newPackageName +
          ".Config = " + serial + ";");
	
  var data = "classPath=libraries." +
          tagRef.PACKAGE_NAME + ".local"
          + "&config=" + cfgData;
  
  POST(APP_PATH + "saveConfig", data, function(msg, httpr) {
		var obj = qubit.opentag.Utils.gevalAndReturn(msg);
    if (!obj || !obj.result.ok) {
      logError(msg);
    } else {
      info("Saved");
    }
  });
}

function saveNewVersion(refNode, e) {
	var event = e || window.event;
	event.ignoreEvent = true;
  refNode = getLibraryReferenceNode(refNode);
  var tagRef = refNode.reference;
  var versionName =
            prompt("Please enter the name of the new version, eg 'v1'.\n\n");
  
  if (!versionName) {
    return;
  }
  
  versionName = classPath(versionName);
  var proceed = true; /*confirm(
        "New library version to be created.\n\n" +
        "Version name: " + versionName + "\n\n" +
        "Location: " + (tagRef.PACKAGE_NAME + "." + versionName)
          .replace(/\./g, "/") +
        "\n\n\nPlease confirm.\n\n");*/
  
  if (!proceed) {
    return;
  }
  
	var cpChunks = tagRef.PACKAGE_NAME.split(".");
	//vendor + tag library cp name
	var cp = cpChunks[0] + "." + cpChunks[1];
	
  //var newPackageName = tagRef.PACKAGE_NAME + "." + versionName;  
  var data = "location=libraries&classPath=" +
				tagRef.PACKAGE_NAME + "&version=" + cp + "." + versionName;
  
  POST(APP_PATH + "saveNewVersion", data, function(msg, httpr) {
		var obj = qubit.opentag.Utils.gevalAndReturn(msg);
    if (!obj || !obj.result.ok) {
      logError("Error while creating new version: " + msg);
    } else {
      info("Created new version.");
      info("Rebuilding system...", 10000);
      rebuildAndReload();
    }
  });
}

function rebuildAndReload() {
  if (window.buildLocationString) {
    var data = "path=" +  encodeURIComponent(window.buildLocationString);
    GET(APP_PATH + "rebuild?" + data, function(msg, httpr) {
			var obj = qubit.opentag.Utils.gevalAndReturn(msg);
      if (!obj || !obj.result.ok) {
        logError("Rebuild failed! " + msg);
      } else {
        info("System has been rebuilt for " + window.buildLocationString, 10000);
        info("Reloading page.");
        location.reload();
      }
    });
  }
}

var editUVURL = LIBRARIES_REPO_LOC + "shared/templates/UVConf.js";
function editUVURLHandler(node) {
	GET(editUVURL, function (message, xhr) {
		if (xhr.status !== 200) {
      logError(message);
    } else {
			editUV(node, message);
		}
	});
}

function editUV(refNode, template) {
  var tagRef = refNode.reference;
  openInEditorAndCreate(
			"libraries." + tagRef.PACKAGE_NAME + ".local",
			"UVConf.js",
			true,
			template);
}

function openInEditorHandler(refNode) {
  var tagRef = refNode.reference;
  openInEditorAndCreate("libraries." + tagRef.PACKAGE_NAME, "Tag.js", false);
}

function openInEditorAndCreate(pckg, file, create, data) {
  var data = "classPath=" + pckg
    + "&file=" + file
          + "&create=" + !!create
          + "&data=" +  encodeURIComponent(data);
  POST(APP_PATH + "openInEditor", data, function(msg, httpr) {
    var obj = qubit.opentag.Utils.gevalAndReturn(msg);
    if (!obj || !obj.result.ok) {
      logError(msg);
      logError("Make sure that CLASSPATH of your library matches its location!");
    }
  });
}


function reloadTagHandler(refNode) {
  var Utils = qubit.opentag.Utils;
  var tagRef = refNode.reference;
	var versionCP = refNode.classReference.versionClassPath;
  var data = ("classPath=libraries." +
          tagRef.PACKAGE_NAME + "&file=Tag.js");
  reloadTests(refNode);
  POST(APP_PATH + "getClassPath", data, function(msg, httpr) {
    if (httpr.status !== 200) {
      logError("Error loading tag: " + msg);
    }
    try {
      var cfg = getParametersAndConfigForTagNode(refNode, true, true);
      Utils.getObjectUsingPath(tagRef.PACKAGE_NAME).Tag = undefined;
      qubit.opentag.Utils.geval(msg);
      var libraryClass = Utils.getObjectUsingPath(tagRef.PACKAGE_NAME + ".Tag");
			libraryClass.versionClassPath = versionCP;
      renderLibraryToNode(libraryClass, null, null, cfg);
    } catch (ex) {
      logError("Error loading tag: " + ex);
    }
  });
}

function cancelEvent(e) {
	if (e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}

var testSuiteCodeTemplateURL = LIBRARIES_REPO_LOC + 
				"shared/templates/TestsSuite.js";
function addEditTests(node) {
	GET(testSuiteCodeTemplateURL, function (message, xhr) {
		if (xhr.status !== 200) {
      logError(message);
    } else {
			addEditStandardTests(node, message);
		}
	});
}

function addEditStandardTests(node, template) {
  node = getLibraryReferenceNode(node);
  if (node) {
    var tag = node.reference;
    var data = template.replace("_PACKAGE_", tag.PACKAGE_NAME);
    data = data.replace("_TAG_", tag.PACKAGE_NAME + ".Tag");
    var path = tag.PACKAGE_NAME.split(".").join("/");
    data = data.replace("_TAGPATH_", path + "/Tag.js");
    openInEditorAndCreate(
            "libraries." + tag.PACKAGE_NAME + ".local",
            "TestsSuite.js",
            true, data);
  }
}

var bddSuiteCodeTemplateURL = LIBRARIES_REPO_LOC + "shared/templates/BDDSuite.js";
function addEditDescribeTests(node) {
	GET(bddSuiteCodeTemplateURL, function (message, xhr) {
		if (xhr.status != 200) {
      logError(message);
    } else {
			addEditBDDTests(node, message);
		}
	});
}

function addEditBDDTests(node, template) {
  node = getLibraryReferenceNode(node);
  if (node) {
    var tag = node.reference;
    var data = template.replace("_PACKAGE_", tag.PACKAGE_NAME);
    data = data.replace("_TAG_", tag.PACKAGE_NAME + ".Tag");
    var path = tag.PACKAGE_NAME.split(".").join("/");
    data = data.replace("_TAGPATH_", path + "/Tag.js");
    openInEditorAndCreate(
            "libraries." + tag.PACKAGE_NAME + ".local",
            "BDDSuite.js",
            true, data);
  }
}

function reloadTests(refNode) {
	_reloadTest(refNode, "BDDSuite.js");
	//_reloadTest(refNode, "TestsSuite.js");
}

function _reloadTest(refNode, name) {
  var Utils = qubit.opentag.Utils;
  var tagRef = refNode.reference;
  var data = ("classPath=libraries." +
          tagRef.PACKAGE_NAME + ".local&file=" + name);
  
  POST(APP_PATH + "getClassPath", data, function(msg, httpr) {
			if (httpr.status !== 200) {
      log("Error loading test (probably no tests). " + msg);
    }
    try {
      var cfg = getParametersAndConfigForTagNode(refNode, true, true);
      try {
        Utils.getObjectUsingPath(tagRef.PACKAGE_NAME)
                .local.TestsSuite = undefined;
      } catch (e) {
        
      }
      qubit.opentag.Utils.geval(msg);
      var libraryClass = Utils.getObjectUsingPath(tagRef.PACKAGE_NAME + ".Tag");
      renderLibraryToNode(libraryClass ,null, null, cfg);
    } catch (ex) {
      log("Error loading test: " + ex);
    } finally {
      reloadBDDTests(refNode);
    }
  });
}
//refactor to sinle - reload file in local and rebuild page
function reloadBDDTests(refNode) {
  var Utils = qubit.opentag.Utils;
  var tagRef = refNode.reference;
  var data = ("classPath=libraries." +
          tagRef.PACKAGE_NAME + ".local&file=BDDSuite.js");
  
  POST(APP_PATH + "getClassPath", data, function(msg, httpr) {
    if (httpr.status !== 200) {
      log("Error loading test (probably no tests). " + msg);
    }
    try {
      var cfg = getParametersAndConfigForTagNode(refNode, true, true);
      try {
        Utils.getObjectUsingPath(tagRef.PACKAGE_NAME)
                .local.BDDSuite = undefined;
      } catch (e) {
        
      }
      qubit.opentag.Utils.geval(msg);
      var libraryClass = Utils.getObjectUsingPath(tagRef.PACKAGE_NAME + ".Tag");
      renderLibraryToNode(libraryClass ,null, null, cfg);
    } catch (ex) {
      log("Error loading test: " + ex);
    }
  });
}

var testsRunning = false;
function runAllTests(callback) {
  if (testsRunning) {
    info("Wait for currently running tests to finish.");
    return;
  }
  testsRunning = true;
  var elements = document.getElementsByTagName("div");
  var total = 0;
  var counted = 0;
  var testNodes = [];
  for (var i = 0; i < elements.length; i++) {
    var node = elements[i];
    if (node.getAttribute("library-node") === "true") {
      ++total;
      testNodes.push(node);
    }
  }
  
  var sequence = function(index) {
    try {
      var node = testNodes[index];
      if (!node) {return;}
      runTestsHandler(node, function () {
        ++counted;
        if (counted < total) {
          setTimeout(function() {
            sequence(counted);
          }, 5);
        }
        if (counted === total) {
          testsRunning = false;
          if (callback) {
            callback();
          }
        }
      });
    } catch (e) {
    }
  };
  
  sequence(0);
  
  theProgressBar("Running test suites...", function () {
    if (counted === 0) {
      return 0;
    }
    return 100 * (counted/(total));
  });
}

function runTestsHandler(referencingNode, callback) {
  try {
    var tagRef = referencingNode.reference;
    var Utils = qubit.opentag.Utils;
    var suite = Utils
          .getObjectUsingPath(tagRef.PACKAGE_NAME + ".local.TestsSuite");
  
    var bddSuite = Utils
          .getObjectUsingPath(tagRef.PACKAGE_NAME + ".local.BDDSuite");
    
    var allSuitesFinished = function () {
      var notFinished = false;
      if (suite && !suite.isFinished()) {
        notFinished = true;
      } else if (bddSuite && !bddSuite.isFinished) { 
				//finished is used to distinkt jasmine
        notFinished = true;
      }
      
      if (!notFinished) {
        
//        add tests check for jasmine tests
        var bddfailed = false;
        if (bddSuite) {
          var tests = bddSuite.children;
          for (var i = 0; i < tests.length; i++) {
            if (tests[i].result.status === "failed") {
              bddfailed = true;
              break;
            }
          }
        }
        
        var failed = false;
        
        if (suite && suite.failedTests && suite.failedTests.length > 0) {
            failed = true;
        }
        
        if (bddSuite || suite) { 
          if (failed || bddfailed) {
            Utils.addClass(referencingNode, "tests-failed");
          } else {
            Utils.addClass(referencingNode, "tests-passed");
          }
        }
        
        if (callback) {
          callback();
        }
      }
    };
    
    if (suite || bddSuite) {
      if (suite) {
        runSuite(suite, allSuitesFinished);
      }
      if (bddSuite) {
        runBDDSuite(bddSuite, allSuitesFinished);
      }
    } else {
      if (callback) {
        callback();
      }
      Utils.addClass(referencingNode, "tests-notests");
      log("No tests detected for " + tagRef.config.name);
    }
    
  } catch (ex) {
    logError("Error while executing tests suite:" + ex);
  }
}

function runSuite(suite, callback) {
    if (suite) {
      suite.onFinished = function () {
        if (callback) {
          callback();
        }
      };
      suite.run();
    } else {
      if (callback) {
        callback();
      }
    }
}

function runBDDSuite(bddSuite, callback) {
    if (bddSuite) {
      var zuper = bddSuite.resultCallback;
      bddSuite.resultCallback = function () {
        zuper.apply(bddSuite, arguments);
        bddSuite.isFinished = true;
        if (callback) {
          try {
            callback();
          } catch (ex) {
            alert(ex);
          }
        }
      };
      bddSuite.execute();
    } else {
      if (callback) {
        bddSuite.isFinished = true;
        callback();
      }
    }
}

function toggleUVSelector(button) {
  if (button.innerHTML === "Close UV Browser") {
    var node = document.getElementById("uv-selector-holder");
    node.innerHTML = "";
    button.innerHTML = "Browse UV";
  } else {
    openUVVariableSelector();
     button.innerHTML = "Close UV Browser";
  }
}

function openUVVariableSelector() {
  var node = document.getElementById("uv-selector-holder");
  node.innerHTML = "";
  renderUVSelector(node);
}

var uvPopupTemplate = document.getElementById("uv-popup-template").innerHTML;
function renderUVSelector(node, selectionCallback) {
  var Utils = qubit.opentag.Utils;
  node.innerHTML = "";
  var e = document.createElement("div");
  e.innerHTML = uvPopupTemplate;
  node.appendChild(e);
  var itemsNode = e.children[0].children[1].children[0].children[0];
  var outputNode = e.children[0].children[2];
  loadUVVariables(function () {
    var UVS = window.UVS;
    for (var i = 0; i < UVS.length; i++) {
      var uv = UVS[i];
      var itemNode = renderUVSelectorItemYoNode(itemsNode, uv);
      
      (function (itemNode) {
        itemNode.onclick = function () {
          outputNode.value = itemNode.expr;
          outputNode.className = "result";
          if (selectionCallback) {
            selectionCallback(itemNode.expr);
          }
        };
      }(itemNode));
    }
  });
}

var uvPopupItemTemplate = document.getElementById("uv-popup-item-template").innerHTML;
function renderUVSelectorItemYoNode(node, uv) {
  var Utils = qubit.opentag.Utils;
  var e = document.createElement("div");
  e.innerHTML = uvPopupItemTemplate;
  var nameNode = e.children[0].children[0];
  var descNode = e.children[0].children[1];
  nameNode.innerHTML = uv.name;
  descNode.innerHTML = uv.description;
  e.expr = uv.expression;
  node.appendChild(e);
  return e;
}

function loadUVVariables(callback) {
  if (window.UVS) {
    if (callback) {
      callback(UVS);
    }
    return;
  }
  
  GET(LIBRARIES_REPO_LOC + "shared/bin/html/data/uv.data",
		function(msg, httpr) {
    if (httpr.status !== 200) {
      alert("Error loading UV data: " + msg);
    }
    try {
      var lines = msg.split("\n");
      var uvs = [];
      var euvs = {};
      for (var i = 0; i < lines.length; i++) {
        var parts = lines[i].split("\t");
        var uv = {
          name: parts[1],
          expression: parts[2],
          description: parts[3]
        };
        euvs[uv.expression] = uv;
        uvs.push(uv);
      }
      
      window.UVS = uvs;
      window.EUVS = euvs;//map by expression string, should be unique
      callback(uvs);
    } catch (ex) {
      logError("Error loading UVs: " + ex);
    }
  });
}
/*
 * Copyright 2013-2014, Qubit Group
 * http://opentag.qubitproducts.com
 * @author Peter Fronc peter.fronc@qubitproducts.com
 * 
 * This library is licensed under LGPL v3 license.
 * For details please see attached LICENSE file or go to:
 * https://www.gnu.org/licenses/lgpl.html
 */
/**
 * JavaScript serializer. JSON compatible at default use.
 */
(function () {
  
  var json = {};

  function checkIfInstanceOf(object, instances) {
    for (var i = 0; i < instances.length; i++) {
      if ((typeof(instances[i]) === "function") && /*ie case*/
            object instanceof instances[i]) {
        return true;
      }
    }
    return false;
  }
  
  json.checkIfInstanceOf = checkIfInstanceOf;
  
  function checkIfTypeOf(object, types) {
    for (var i = 0; i < types.length; i++) {
      if (typeof(object) === types[i]) {
        return true;
      }
    }
    return false;
  }

  function checkIfNameOf(string, names) {
    for (var i = 0; i < names.length; i++) {
      if (string === names[i]) {
        return true;
      }
    }
    return false;
  }

  function objectExistsInParentElements(object, parentElements) {
    if (object instanceof Object) {
      for (var i = 0; i < parentElements.length; i++) {
        if (parentElements[i] === object) {
          return true;
        }
      }
    }
    return false;
  }
  
  function removeFromArray(object, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === object) {
        array.splice(i, 1);
      }
    }
    return array;
  }

  function jsonString(object) {
    return "\"" + object.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"") + "\"";
  }
  var TAB = "  ";
  var _serialize = function (object, config, parentElements, level, levelMax) {
    if (!isNaN(levelMax) && level >= levelMax) {
      return undefined;
    }
    var excludedInstances, excludedTypes, excludedNames, own,
            includeFunctions = false, excludeOnTrue, dateAsString = true,
            raw = false, fakeFunctions = false, realFunctions = false,
            prettyPrint = false;
    
    if (config) {
      if (config.prettyPrint) {prettyPrint = true;}
      if (config.raw) raw = config.raw; //json type as default
      if (config.excludedInstances) excludedInstances = config.excludedInstances;
      if (config.excludedTypes) excludedTypes = config.excludedTypes;
      if (config.excludedNames) excludedNames = config.excludedNames;
      if (config.own) own = config.hasOwn;
      if (config.fakeFunctions) fakeFunctions = config.fakeFunctions;
      if (config.realFunctions) realFunctions = config.realFunctions;
      if (config.includeFunctions) includeFunctions = config.includeFunctions;
      if (config.excludeOnTrue) excludeOnTrue = config.excludeOnTrue;
      if (config.dateAsString) dateAsString = config.dateAsString;
    }
    
    var indent = "";
    var eol = "";
    if (prettyPrint) {
      for (var i = 0; i < level; i++) {
        indent += TAB;
      }
      eol = "\n";
    }
    
    if (object instanceof Date) {
      return (!raw || dateAsString) ?
        jsonString(object.toISOString()) : object.valueOf();
    } else if (!includeFunctions && typeof object === "function") {
      return undefined;
    } else if (typeof object === "number") {
      return drawValue(indent, String(object));
    } else if (typeof object === "string") {
      return drawValue(indent, jsonString(object));
    } else if (object === null) {
      return drawValue(indent, "null");
    } else if (object === undefined) {
      return raw ? drawValue(indent, "undefined") : undefined;
    } else if (typeof prop === "boolean") {
      return drawValue(indent, String(object));
    }
    
        
    if (includeFunctions && typeof object === "function") {
      if (fakeFunctions) {
        return "(function(){})";
      }
    }
    
    if (includeFunctions && typeof object === "function") {
      if (realFunctions) {
        var out = prettyPrint ? object.toString() : object.toString();
        return drawValue(indent, out);
      }
    }
    
    if (objectExistsInParentElements(object, parentElements)) {
      return undefined;//"\"[parent contained]\"";
    }
    
    parentElements.push(object);
    ++level;
    
    if (object instanceof Array) {
      var strings = [];
      for (var i = 0; i < object.length; i++) {
        if (excludeOnTrue) {
          try {
            if (excludeOnTrue(object)) {
              continue;
            }
          } catch (ex) {}
        }
        if (excludedInstances && checkIfInstanceOf(object, excludedInstances)) {
          continue;
        }
        if (excludedTypes && checkIfTypeOf(object, excludedTypes)) {
          continue;
        }
        try {
          var el = _serialize(object[i], config, parentElements, level, levelMax);
        } catch (ex) {
          removeFromArray(object, parentElements);
          return jsonString(String(ex));
        }
        if (el !== undefined) {
          strings.push(el);
        }
      }
      removeFromArray(object, parentElements);
      return drawObject("[", "]", indent, eol, strings);
    }

    var parts = [];
    for (var key in object) {
      var prop = object[key];
      if (own && !object.hasOwnProperty(key)) {
        continue;
      }
      if (excludeOnTrue) {
        try {
          if (excludeOnTrue(object)) {
            continue;
          }
        } catch (ex) {}
      }
      if (excludedInstances && checkIfInstanceOf(prop, excludedInstances)) {
        continue;
      }
      if (excludedTypes && checkIfTypeOf(prop, excludedTypes)) {
        continue;
      }
      if (excludedNames && checkIfNameOf(key, excludedNames)) {
        continue;
      }
      try {
        var objEl = _serialize(prop, config, parentElements, level, levelMax);
        if (objEl !== undefined) {
          var elString = ("\"" + key.replace(/\"/g, "\\\"") + "\":") + objEl;
          parts.push(elString);
        }
      } catch (ex) {//SOME OBJECT CAN THROW EXCEPTION ON Access, FRAMES ETC.
        removeFromArray(object, parentElements);
        return jsonString(String(ex));
      }
    }
    removeFromArray(object, parentElements);
    return drawObject("{", "}", indent, eol, parts);
  };

  function drawValue(indent, string) {
    return indent ? (" " + string) : string;
  }

  function drawObject(s, e, indent, eol, parts){
    var array, spaceAfterColon = " ";
    if (indent==="") {
      spaceAfterColon = "";
    }
    if (indent || eol) {
      if (parts.length === 0 ) {
        array = [spaceAfterColon, s, parts.join(","), e];
      } else {
        array = [spaceAfterColon, s, "\n",
                indent, TAB,
                      parts.join("," + "\n" + indent + TAB),
                "\n",indent, e
              ];
      }
    } else {
      array = [s, parts.join(","), e];
    }
    
    return array.join("");
  }

  /**
   * Exclusive and luxury javascript serializer.
   * 
   * Config object assignment:
   * 
   * <pre>
   *   config.excludedInstances Instanceof will be called
   *      on  excludeInstancess functions array
   *   config.excludedTypes array of objects that typeof
   *    will be called in order to exclude properties on object
   *   config.excludedNames array of strings that will be check
   *    on object's properties
   *   config.hasOwn if hasOwnProperty should apply for objects 
   *        (default false)
   *   config.realFunctions serializer will output toString of function objects,
   *    this option only applies if includeFunctions is enabled
   *   config.fakeFunctions if includeFunctions is applied, this option will cause
   *    empty function to be attached for such objects.
   *   config.includeFunctions if 
   *      functions should be included (default false), if only this option is specified
   *      fuinctions will be treated as objects and serializer will go over its properties.
   *   config.excludeOnTrue function that will take
   *      current objects property and must return boolean, if returns true,
   *      object will be added to serialized string
   *   config.level if specified, ho maximally deep
   *    properties generation can go.
   *   config.dateAsString = treat dates as strings (default true)
   *   config.raw dont use "json" specific output and serialize real values
   *     (undefines, dates as numbers)
   * </pre>
   * 
   * @param {type} object
   * @param {Object} config
   * @returns {String}
   */
  json.serialize = function (object, config) {
    var parentElements = [];
    var level;
    if (config) {
      level = config.level;
    }
    return _serialize(object, config, parentElements, 0, level);
  };
  
  var global = (0, eval("this")) || (function(){return this;}()) || this.window;
  
  /**
   * Parsing json function with specification specified in RFC4627, section 6. 
   * It is a simple security check. Enough for most of needs.
   * @param {type} string
   * @returns {RegExp}
   */
  json.parse = function (string) {
    if (!(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
         string.replace(/"(\\.|[^"\\])*"/g, '')))) {
      var expression = "json.___tmp = (" + string + ")";
      if (global.execScript) {
         global.execScript(expression);
       } else {
         (function () {return global["eval"].call(global, expression); }());
       }
     } else {
       throw "insecure json!";
     }
     return json.___tmp;
  };

  global.json = json;
  
  try {
    module.exports = json;
  } catch (e) {
    //try exports
  }
}());

(function () {

  function Notification(config) {
    if (config) {
      this.parentContainer = config.parentContainer;
      this.container = config.container;
      this.className = config.className;
      this.maxTime = config.maxTime;
      this.closeable = config.closeable;
      this.init();
    }
  }

  Notification.prototype.init = function () {
    this.container = this.container || document.createElement("div");
    this.container.className += " qubit-notification " + 
      (this.className ? this.className : "");
  };

  Notification.prototype.drawCloseButton = function () {
    var _this = this;
    if (this.closeable) {
      this.closeButton = document.createElement("div");
      if (this.container.childNodes.length === 0) {
        this.container.appendChild(this.closeButton);
      } else {
        this.container.insertBefore(this.closeButton,
          this.container.childNodes[0]);
      }
      this.closeButton.className = "notification-close-button";
      this.closeButton.onclick = function () {
        _this.destroy();
      };
    }
  };

  Notification.prototype.show = function () {
    this.container.style.display = "";
  };

  Notification.prototype.hide = function () {
    this.container.style.display = "none";
  };

  Notification.prototype.setContent = function (content) {
    if (this.content !== content) {
      this.content = content;
      this.container.innerHTML = '';
      if (typeof (content) === "object") {
        this.container.appendChild(content);
      } else {
        this.container.innerHTML = content;
      }
      this.drawCloseButton();
    }
    return content;
  };

  Notification.prototype.paint = function () {
    if (!this.painted) {
      this.parentContainer.appendChild(this.container);
      this.painted = true;
    }
  };

  Notification.prototype.destroy = function () {
    try {
      if (this.onDestroy) {
        this.onDestroy();
      }
    } finally {
      if (this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }
    }
  };

  window.Notification = Notification;

}());

(function () {
  
  var Notification = window.Notification;
  
  function NotificationManager(config) {
    if (config) {
      this.maxTime = +config.maxTime || 60 * 1000;
      this.notifiers = {};
      this.className = config.className;
      this.parentContainer = config.parentContainer || document.body;
      this.container = config.container || document.createElement("div");
      this.init();
    }
  }

  NotificationManager.prototype.notify = 
    function (notifer, msg, maxtime, classSuffix, closeable) {
      if (!this.notifiers[notifer]) {
        var notification = new Notification({
            parentContainer: this.container,
            maxTime: maxtime,
            className: classSuffix,
            closeable: closeable
          }),
          _this = this;

        notification.onDestroy = function () {
          delete _this.notifiers[notifer];
        };

        this.notifiers[notifer] = notification;
        notification.paint();
      }
      
      this.notifiers[notifer].show();
      this.notifiers[notifer].setContent(msg);
      this.notifiers[notifer].timestamp = new Date().valueOf();
    };

  NotificationManager.prototype.done = function (notifer, msg, timeout) {
    this.notify(notifer, msg);
    var _this = this;
    setTimeout(function () {
      if (_this.notifiers[notifer]) {
        _this.notifiers[notifer].destroy();
        delete _this.notifiers[notifer];
      }
    }, timeout);
  };

  NotificationManager.prototype.init = function () {
    this.setParentContainer(this.parentContainer);
    var _this = this, loop;
    loop = function () {
      if (_this.container && _this.container.parentNode) {
        _this.oldNotifiersCheck();
        setTimeout(loop, 500);
      }
    };
    loop();
  };

  NotificationManager.prototype.setParentContainer =
    function (parentContainer) {
      this.parentContainer = parentContainer;
      this.parentContainer.appendChild(this.container);
      if (this.container.className
              .lastIndexOf(" qubit-notificationmanager" === -1)) {
        this.container.className += " qubit-notificationmanager " +
          this.className;
      }
    };

  NotificationManager.prototype.oldNotifiersCheck = function () {
    var prop, maxtime;
    for (prop in this.notifiers) {
      if (this.notifiers.hasOwnProperty(prop)) {
        maxtime = this.notifiers[prop].maxTime || this.maxTime;
        if ((new Date().valueOf() - this.notifiers[prop].timestamp) > 
            maxtime) {
          this.notifiers[prop].destroy();
        }
      }
    }
  };

  NotificationManager.prototype.clear = function () {
    var prop;
    for (prop in this.notifiers) {
      if (this.notifiers.hasOwnProperty(prop)) {
        this.notifiers[prop].destroy();
      }
    }
  };

  window.NotificationManager = NotificationManager;

//initialization for the engine
}());














/**
 * Comment
 */


var libraryTemplate = document.getElementById("library-template").innerHTML;

  /**
   * 
   * @type @exp;document@call;getElementById@pro;innerHTML
   */
  function renderLibraryToNode(libraryClass, libraryNode, className, cfg) {
    cfg = cfg || {};
    var instance = new libraryClass();
    instance.unregister();

    if (cfg.parameters && instance.config.parameters) {
      for (var i = 0; i < cfg.parameters.length; i++) {
        var token = cfg.parameters[i].token;
        for (var j = 0; j < instance.config.parameters.length; j++) {
          if (instance.config.parameters[j].token === token) {
            instance.config.parameters[j].inputVariable =
                    cfg.parameters[i].inputVariable;
          }
        }
      }
    }

    var fullName = instance.PACKAGE_NAME + "." + instance.CLASS_NAME;

    if (!libraryNode) {
      libraryNode =  document.getElementById(fullName);
      qubit.opentag.Utils.removeClass(libraryNode, "tests-failed");
      qubit.opentag.Utils.removeClass(libraryNode, "tests-passed");
      qubit.opentag.Utils.removeClass(libraryNode, "tests-notests");
    }

    libraryNode.setAttribute("library-node", "true");

    libraryNode.innerHTML = libraryTemplate;

    var versionHTML = "" +
            "<a href='#-3' onclick='saveNewVersion(this, arguments[0]);'> clone </a>";

    var version = "";
    if (libraryClass.versionClassPath) {
      var versionString = libraryClass.prototype.PACKAGE_NAME
              .replace(libraryClass.versionClassPath + ".", "");
      versionString = versionString.replace(/\._(\d)/g,".$1");
      version = "<span class='version-title'> (" + versionString
           + ") </span>";
    }

    libraryNode.children[0].children[1].innerHTML = 
            instance.config.name + version + versionHTML;
    qubit.opentag.Utils.addClass(libraryNode, "library");
    if (className) {
      qubit.opentag.Utils.addClass(libraryNode, className);
    }
    libraryNode.reference = instance;
    libraryNode.classReference = libraryClass;
    libraryNode.id = fullName;

    var params = instance.config.parameters;
    var head = libraryNode.children[7].children[0];
    var contents = libraryNode.children[7].children[1];
    try {
      var configObject = qubit.opentag.Utils
              .getObjectUsingPath(instance.PACKAGE_NAME + ".local.Config");
      if (configObject && configObject.parameters) {
        _mergeParameters(params, configObject.parameters);
      }
    } catch (ex) {
      //may not be in there
    }
    head.children[0].innerHTML =  
            (instance.config.imageUrl ?
              "<img class='logo' src='" + instance.config.imageUrl +
                "' align='right' />" :
              "") +
              instance.config.description;

    addParameters(contents, params);
    addConfig(contents, instance.config);
    addPrePostTemplate(contents, instance);
    addTestsSuite(contents, instance);
  }

  function _mergeParameters(to, from) {
    for (var i = 0; i < to.length; i++) {
      var paramTo = to[i];
      for (var j = 0; j < from.length; j++) {
        if (paramTo.token && paramTo.token === from[j].token) {
          var value = to[i].inputVariable;
          var uvTo = to[i].uv;
          var uvFrom = from[i].uv;

          to[i] = from[j];

          if (value) {
            to[i].inputVariable = value;
          }

          if (uvTo) {
            to[i].uv = uvTo;
          }
          break;
        }
      }
    }
  }

  /**
   * 
   * Adding library function to anchor.
   * 
   * 
   * @type @exp;document@call;getElementById@pro;innerHTML
   */
  function addLibrary(anchor, libraryClass) {
    var libraryNode = document.createElement("div");
    anchor.appendChild(libraryNode);

    var url = APP_PATH + "getClassPath?classPath=libraries." +
            libraryClass.prototype.PACKAGE_NAME +
            ".local&file=Config.js";
    try {
      GET(url, function(msg) {
        try {
          qubit.opentag.Utils.geval(msg);//RUN CONFIG HERE WHEN CLASS IS LOADED
        } catch (e) {}
        renderLibraryToNode(libraryClass, libraryNode, "hide");
      });
    } catch (ex) {
      //any excpetion
      renderLibraryToNode(libraryClass, libraryNode, "hide");
    }
  }

  var parameterTemplate = document.getElementById("parameter-template").innerHTML;
  var parametersTemplate = document.getElementById("parameters-template").innerHTML;
  /**
   * 
   * @param {type} anchor
   * @param {type} params
   * @returns {undefined}
   */
  function addParameters(anchor, params) {
    var e = document.createElement("div");
    e.innerHTML = parametersTemplate;
    e.className = "parameters-container";
    anchor.appendChild(e);
    anchor = e.children[1].children[0];
    var saveAnchor = e.children[1].children[1];

    for (var i = 0; i < params.length; i++) {
      e = document.createElement("div");
      var parameter = params[i];
      e.innerHTML = parameterTemplate;
      var paramNode = e.getElementsByTagName("input")[0];
      paramNode.pindex = i;
      e.paramNode = paramNode; 
      e.uvNode = e.getElementsByTagName("input")[1];
      e.getElementsByTagName("label")[0].innerHTML = parameter.name
        + " (token: <pre style='display:inline'>" + parameter.token + "</pre>)";
      var uvPresent = false;
      if (parameter.uv) {
        uvPresent = true;
        e.uvNode.value = parameter.uv;
      } else {
        qubit.opentag.Utils.addClass(e.uvNode, "no-uv");
        e.uvNode.value = "edit script to set universal variable";
      }
      var enterValue = (parameter.inputVariable !== undefined) ?
                                        parameter.inputVariable : "";
      paramNode.value = enterValue;
      paramNode.className = (enterValue || uvPresent) ? "" : "red";

      if (uvPresent) {
        paramNode.setAttribute("onfocus", null);
        paramNode.setAttribute("onblur", null);
      }

      //attach changer for uv
      (function (e) {
  //      e.uvNode.onclick = function () {
  //        createUVPopup(e.uvNode, function (chosenValue) {
  //          e.uvNode.value = chosenValue;
  //        });
  //      };
      })(e);
      anchor.appendChild(e);
    }

    if (params.length === 0) {
      saveAnchor.style.display = "none";
      anchor.innerHTML = "<div class='no-params'>No parameters defined.</div>"
    } else {
      saveAnchor.style.display = "";
    }
  }


  var excluded = [
    "parameters",
    "PACKAGE",
    "dependencies",
    "CONSTRUCTOR",
    "dedupe",
    "priv",
    "name",
    "description",
    "inactive",
    "loadDependenciesOnLoad"
  ];
  function propertyExcludedFromConfig(prop) {
    for (var i = 0; i < excluded.length; i++) {
      if (prop === excluded[i]) {
        return true;
      }
    }
    return false;
  }
  var hidden = [
    "filterTimeout",
    "isPrivate", ,
    "usesDocumentWrite",
    "timeout",
    "singleton",
    "locationPlaceHolder",
    "locationDetail",
    "locationObject",
    "noMultipleLoad",
    "__proto__"
  ];
  function propertyHiddenFromConfig(prop) {
    for (var i = 0; i < hidden.length; i++) {
      if (prop === hidden[i]) {
        return true;
      }
    }
    return false;
  }

  function prepareConfigElement(prop, value, configTemplate) {
    var e = document.createElement("div");
    var p = value;
    e.innerHTML = configTemplate;
    e.children[0].className = "config";
    e.getElementsByTagName("input")[0].cname = prop;
    e.getElementsByTagName("label")[0].innerHTML = prop;
    if (p !== undefined) {
      e.getElementsByTagName("input")[0].value = p;
    }
    e.getElementsByTagName("input")[0].entered = true;
    return e;
  }
  /**
   * 
   * @type @exp;document@call;getElementById@pro;innerHTML
   */
  var configTemplate = document.getElementById("config-template").innerHTML;
  var hiddenConfigTemplate = document.getElementById("toggled-config-template").innerHTML;
  function addConfig(anchor, config) {
    var el = document.createElement("div");
    el.innerHTML = hiddenConfigTemplate;
    el.className = "config-header";
    var confHead = el.children[0].children[0];
    confHead.innerHTML = "<span plus='true'>+</span> Configuration";
    toggleShowSibling(confHead);
    var configAnchor = el.children[0].children[1];
    anchor.appendChild(el);
    for (var prop in config) {
      if (!propertyExcludedFromConfig(prop) && !propertyHiddenFromConfig(prop)) {
        var e = prepareConfigElement(prop, config[prop], configTemplate);
        configAnchor.appendChild(e);
      }
    }
    var hel = document.createElement("div");
    hel.innerHTML = hiddenConfigTemplate;
    hel.className = "config-header";
    configAnchor.appendChild(hel);
    var confHead = hel.children[0].children[0];
    configAnchor = hel.children[0].children[1];
    toggleShowSibling(confHead);
    confHead.innerHTML = "<span plus='true'>+</span> Advanced";
    for (var prop in config) {
      if (!propertyExcludedFromConfig(prop) && propertyHiddenFromConfig(prop)) {
        var e = prepareConfigElement(prop, config[prop], configTemplate);
        configAnchor.appendChild(e);
      }
    }
  }



  /**
   * 
   * @type @exp;document@call;getElementById@pro;innerHTML
   */
  var prePostTemplate = document.getElementById("pre-post-script-template").innerHTML;
  function addPrePostTemplate(anchor, tag) {
    var e = document.createElement("div");
    e.innerHTML = prePostTemplate;
    var txtAreas = e.getElementsByTagName("textarea");
    //we know order
    var pre = txtAreas[0];
    var post = txtAreas[1];
    var script = txtAreas[2];

    var pre_value = tag.config.pre ? tag.config.pre : String(tag.pre);
    var post_value = tag.config.post ? tag.config.post : String(tag.post);
    var script_value = tag.config.script ? tag.config.script : String(tag.script);

    pre.value = String(pre_value);
    post.value = String(post_value);
    script.value = String(script_value);

    pre.style.display = "none";
    post.style.display = "none";
    script.style.display = "none";

    tag.preNode = pre;
    tag.postNode = post;
    tag.scriptNode = script;

    //@TODO add case config.prop is a function...
    anchor.appendChild(e);
  }






  /**
   * Tests section
   * 
   */
  var testTemplate = document.getElementById("unit-test-template").innerHTML;
  function addTest(anchor, testInstance) {
    var e = document.createElement("div");
    e.innerHTML = testTemplate;
    e.className = "unit-test";
    testInstance.testNode = e;

    testInstance.statusNode = e.children[0];
    testInstance.nameNode = e.children[1];

    testInstance.nameNode.innerHTML = testInstance.name;

    testInstance.onFinished = function () {
      var Utils = qubit.opentag.Utils;
      if (this.failed) {
        Utils.addClass(this.statusNode, "failed");
      } else if (this.passed) {
        Utils.addClass(this.statusNode, "passed");
      }
    };

    //@TODO add case config.prop is a function...
    anchor.appendChild(e);
  }
  function addBDDTest(anchor, child) {
    var e = document.createElement("div");
    e.innerHTML = testTemplate;
    e.className = "unit-test";
    child.testNode = e;

    child.statusNode = e.children[0];
    child.nameNode = e.children[1];

    child.nameNode.innerHTML = child.description;

    var zuper = child.resultCallback;
    child.resultCallback = function (result) {
      zuper.apply(child, arguments);
      var Utils = qubit.opentag.Utils;
      if (child.result.status === "failed") {
        Utils.addClass(child.statusNode, "failed");
      } else if (child.result.status === "passed") {
        Utils.addClass(child.statusNode, "passed");
      }
    };

    //@TODO add case config.prop is a function...
    anchor.appendChild(e);
  }

  var testsSuiteTemplate = document.getElementById("unit-tests-suite-template").innerHTML;
  function addTestsSuite(anchor, tagInstance) {
    var e = document.createElement("div");
    e.className = "unit-tests-suite";
    e.innerHTML = testsSuiteTemplate;

    var Utils = qubit.opentag.Utils;
    var suite = Utils
            .getObjectUsingPath(tagInstance.PACKAGE_NAME + ".local.TestsSuite");
    var bddSuite = Utils
            .getObjectUsingPath(tagInstance.PACKAGE_NAME + ".local.BDDSuite");
    anchor.appendChild(e);
  //    e.children[1].children[0].innerHTML = suite.before ? String(suite.before) : "";
  //    e.children[2].children[0].innerHTML = suite.after ? String(suite.after) : "";
      var unitTestsNode = e.children[1];
      renderTestsToNode(unitTestsNode, suite, bddSuite);
  }
  function renderTestsToNode(unitTestsNode, suite, bddSuite) {
    unitTestsNode.innerHTML = "";
    if (bddSuite) {
      bddSuite.unitTestsNode = unitTestsNode;
      var tests = bddSuite.children;
      for (var i = 0; i < tests.length; i++) {
        addBDDTest(unitTestsNode, tests[i]);
      }
    }
    if (suite) {
      suite.unitTestsNode = unitTestsNode;
      var tests = suite.tests;
      for (var i = 0; i < tests.length; i++) {
        addTest(unitTestsNode, tests[i]);
      }
    }
  }



  function prepareVendorNode(name) {
    var vendorNode = document.createElement("div");
    vendorNode.innerHTML = "<a class='plain' href='#-2'>" + name + "</a>";
    vendorNode.className = "vendor";
    vendorNode.children[0].onclick = function() {
      var hs = !this.ishidden ? "hide" : "show";
      this.ishidden = !this.ishidden;
      this.parentNode.className = "vendor " + hs;
    };
    return vendorNode;
  }


  function findTags(object, array) {
    array = array || [];
    qubit.opentag.Utils.traverse(object, function (obj, parent, prop, trackPath) {
      if (obj && obj.prototype && prop !== "superclass" 
              && obj.prototype instanceof qubit.opentag.BaseTag
              && obj !== qubit.opentag.BaseTag
              && obj !== qubit.opentag.LibraryTag
              && obj !== qubit.opentag.CustomTag
              && object.Tag !== obj) {
        array.push(obj);
      }
    }, {objectsOnly: true, track: true});
    return array;
  }

  /**
   * 
   * @returns {undefined}
   */
  function renderAllLibrariesToPage() {
    var librariesNode = document.getElementById("libraries");
    librariesNode.innerHTML = "";

    var libraries = [];
    var vendors = qubit.opentag.libraries;

    for (var vprop in vendors) {
      var vendor = vendors[vprop];
      var vendorNode = prepareVendorNode(vprop);
      for (var lprop in vendor) {
        try {
          var libraryClass = vendor[lprop].Tag;
          var libraryClassPath = [vprop, lprop].join(".");

          //var versions = findTags(vendor[lprop]);

          //main class
          if (libraryClass) {
            var ctest = new libraryClass({});
            libraryClassPath = libraryClass.prototype.PACKAGE_NAME;
            ctest.unregister();
            if ((ctest) instanceof qubit.opentag.LibraryTag) {
              (function (objV, clazz, objC) {
                libraries.push([objV, clazz, objC]);
              }(vendorNode, libraryClass, ctest));
            }
          }

          //versions
          var versions = findTags(vendor[lprop]);

          for (var i = 0; i < versions.length; i++) {
            var c = new versions[i]({});
            c.unregister();
            versions[i].versionClassPath = libraryClassPath;
            (function (objV, clazz, objC) {
              libraries.push([objV, clazz, objC]);
            }(vendorNode, versions[i], c));
          }
        } catch (ex) {
          //must prompt
          if (window.console && console.log) {
            console.log("Failed to load tag configuration," +
                    " possible syntax error:" + ex);
            info("Failed to load tag configuration," +
                    " possible syntax error:" + ex);
          } else {
            logError("Failed to load tag configuration," +
                    " possible syntax error:" + ex);
          }
        }
      }
  //		
      libraries.sort(function (a, b) {
        var aClass = a[1];
        var bClass = b[1];
        var aConf = a[2].config;
        var bConf = b[2].config;
        var equal = aConf.name === bConf.name;

        if (equal) {
          var versionStringA = "";
          var versionStringB = "";
          if (aClass.versionClassPath) {
            versionStringA = aClass.prototype.PACKAGE_NAME
              .replace(aClass.versionClassPath + ".", "");
          }
          if (bClass.versionClassPath) {
            versionStringB = bClass.prototype.PACKAGE_NAME
              .replace(bClass.versionClassPath + ".", "");
          }
          return  compareVersions(versionStringA, versionStringB);
        } else {
          if (aConf.name > bConf.name) {
            return 1;
          } else if (aConf.name === bConf.name) {
            return 0;
          } else {
            return -1;
          }
        }
      });

      librariesToRender += libraries.length;

  //		for (var f = 0; f < libraries.length; f++) {
  //			var vendorNode = libraries[f][0];
  //			var libraryClass = libraries[f][1];
  //			addLibrary(vendorNode, libraryClass);
  //		}

      librariesNode.appendChild(vendorNode);
    }

    var librariesToRender = libraries.length;
    var counted = 0;
    theProgressBar("Rendering...", function () {
      return 100 * (counted/librariesToRender);
    });

    var bodyLoadedDone = false;
    (function (libraries) {
      var idx = 0;
      var callback = function () {
        for (var i = 0; i < 8; i++) {
          counted++;
          if (idx === libraries.length) {
            if (!bodyLoadedDone) setTimeout(bodyLoaded, 200);
            bodyLoadedDone = true;
            return;
          }
          var node = libraries[idx][0];
          var libraryClass = libraries[idx][1];
          addLibrary(node, libraryClass);
          idx++;
        }
        setTimeout(callback, 4);
      };

      callback();

    }(libraries));
  }

  var total = 1;//extra 1 is for final rendering.
  var counted = 0;

  function loadAllLibs(scriptsPassed) {
    var url = LIBRARIES_REPO_LOC + "shared/bin/html/scripts.txt";
		GET(url, function (msg) {
			var scripts = [];
			var srcs = msg.split(",");
			srcs.push("shared/bin/html/js/build-location.js");
			total = 1;
			counted = 0;

			if (!scriptsPassed) {
				scriptsPassed = [];
				for (var i = 0; i < srcs.length; i++) {
					if (srcs[i]) {
						scriptsPassed.push(srcs[i]);
					}
				}
			}

			theProgressBar("Loading scipts", function () {
				if (counted === 0) {
					return 0;
				}
				return 100 * (counted/(scriptsPassed.length + total));
			});

			var counter = 0;
			var loader = function () {
				if (counter === scriptsPassed.length) {
					return;
				}
				var index = counter;
				counter++;
				var url =  LIBRARIES_REPO_LOC +scriptsPassed[index];
				setTimeout(function () {
					_loadSingle(url, index, loader, scriptsPassed, scripts);
				}, 0);//can be slown down
			};
			loader();
		});
  }

  function compareVersions(A, B) {
    var numA = A.replace(/\./g, ".");
    var chunksA = numA.split(".")
    var numB = B.replace(/\./g, ".");
    var chunksB = numB.split(".");
    //deprecated
    var lesser = null;
    //first fragment
    if (chunksA.length && chunksB.length) {
      var firstA = chunksA[0].replace(/[^\d+]/g, ".").split(".");
      firstA = firstA[firstA.length - 1];
      var firstB = chunksB[0].replace(/[^\d+]/g, ".").split(".");
      firstB = firstB[firstB.length - 1];
      var prefixA = chunksA[0].substring(0, chunksA[0].lastIndexOf(firstA));
      var prefixB = chunksB[0].substring(0, chunksB[0].lastIndexOf(firstB));

      if (prefixA === prefixB && (!isNaN(+firstA) && !isNaN(+firstB))) {
        if (+firstA < +firstB) {
          lesser = true;
        } else if (+firstA > +firstB) {
          lesser = false;
        }
      } else {
        if (chunksA[0] > chunksB[0]) {
          lesser = true;
        } else if (chunksA[0] < chunksB[0]) {
          lesser = false;
        }
      }
    }

    //FIND LESSER THAN
    if (lesser === null) {
      for (var i = 1; i < chunksA.length && i < chunksB.length; i++) {
        var b = chunksB[i];
        var a = chunksA[i];
        var sub = a.charAt(0) === "0" || b.charAt(0) === "0";
        if (sub && i !== 0) {
          a = "0." + a;
          b = "0." + b;
        }

        if (!isNaN(+a) && !isNaN(+b)) {
          if (+(a) < +(b)) {
            lesser = true;
            break;
          } else if (+(a) > +(b)) {
            lesser = false;
            break;
          }
        } else {
          if (a < b) {
            lesser = true;
            break;
          } else if (a > b) {
            lesser = false;
            break;
          }
        }
      }
    }

    if (chunksA.length !== chunksB.length && lesser === null) {
      lesser = (chunksA.length < chunksB.length);
    }

    if (lesser === true) {
      return 1;
    } else if (lesser === null) {
      return 0;
    } else {
      return -1;
    }
  }

  function _loadSingle(url, index, callback, scriptsPassed, scripts) {
    GET(url, function(msg, xhrobj) {
      try {
        scripts[index] = {
          expr: msg,
          url: url
        };
        log(url);
        counted++;
        if (scriptsPassed.length === counted) {
          // READY:
          _allScriptsFetched(scripts);
        }
      } finally {
        if (callback) {
          callback();
        }
      }
    });
  }

  function _allScriptsFetched(scripts) {
    for (var x = 0; x < scripts.length; x++) {
      try {
        eval(scripts[x].expr);
      } catch (ex) {
        logError("Failed to load: " + scripts[x].url + "\nException: " + ex);
      }
    }

    theProgressBar.title += ", rendering... ";
    listScripts(scripts);

    setTimeout(function() {
      counted++;
      renderAllLibrariesToPage();
      window.toggleConsole();

      qubit.opentag.Log.LEVEL = 3;
      qubit.opentag.Log.COLLECT_LEVEL = 5;
    }, 50);
  }

  function keepRunningTests() {
    if (location.href.indexOf("runTests=true") !== -1) {
      info("Running tests...");
      runAllTests(function () {
        countdown("Automatically running tests... ", 10);
        setTimeout(keepRunningTests, 10*1000);
      });
    }
  }

  function countdown(msg, nr, suf) {
    if (nr <= 0) {
      return;
    }
    suf = suf || "";
    info(msg + nr + suf, 1000, "countdown");
    var number = nr -1;
    setTimeout(function () {
      countdown(msg, number);
    }, 1000);
  }



  function listScripts(scripts) {
		return;
    var html = "<div>";
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].url;
      if (src) {
        html += "<a href='" + src + "' target='frame" + i + "' >" + src + "</a>";
      }
    }
    html += "</div>";
    document.getElementById("sources").innerHTML = html;
  }

  /*** ALL READY ***/
  // this is exit call, it is called after everything is loaded.
  function bodyLoaded () {
    // run self testing loop - uff applies
    setTimeout(keepRunningTests, 1000);
  }
	
	
  /*
   * Ugly main.
   * 
   * 
   */
  window.Main = function () {



		
    window.qlog = new qconsole();

    window.toggleConsole = function () {
      qlog.hidden ? qlog.show() : qlog.hide();
    };

    window.logError = function (m, time) {
      log("<span style='color: red'>" + m + "</span>");
      info("<span style='color: #FF766F'>" + m + "</span>", time || 5000);
    };

    window.info = function (msg, time, id) {
      DefaultNotificationsMgr
              .notify(id || new Date().valueOf(), msg, time || 2800, "", true);
      log(msg);
    };

    window.log = function (m) {
      qlog.log(m);
      //try {console.log(m);} catch (e) {}
    };

    Suite.log = Test.log = function (msg) {
      log(msg);
    };

    //delay shortly so IE6 can apply styling
    loadAllLibs();

    window.DefaultNotificationsMgr = new NotificationManager({
      maxTime: 4 * 1000
    });
  };

	
