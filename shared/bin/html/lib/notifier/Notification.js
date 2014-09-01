
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
