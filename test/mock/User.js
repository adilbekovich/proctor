(function(exports) {
  "use strict";

  function User(name) {
    this.name = name || "Anon user";
  }
  exports.User = User;

  User.prototype = {
    greets: function(target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target;
    }
  };
})(this);
