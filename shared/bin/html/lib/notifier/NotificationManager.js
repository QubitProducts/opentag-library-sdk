
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

