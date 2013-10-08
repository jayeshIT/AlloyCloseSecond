function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var btn = Titanium.UI.createButton({
        title: "First",
        right: 10,
        top: 10,
        height: 30,
        width: 60
    });
    var lbl = Titanium.UI.createLabel({
        top: 10,
        left: 100,
        right: 100,
        textAlign: "center",
        text: "Index",
        font: {
            fontSize: 15,
            fontWeight: "bold"
        }
    });
    $.container.add(lbl);
    btn.addEventListener("click", function() {
        var FirstWin = Alloy.createController("FirstWindow").getView();
        FirstWin.open();
    });
    $.container.add(btn);
    $.container.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;