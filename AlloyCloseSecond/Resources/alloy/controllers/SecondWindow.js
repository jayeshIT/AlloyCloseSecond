function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SecondWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.SecondWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "SecondWindow"
    });
    $.__views.SecondWindow && $.addTopLevelView($.__views.SecondWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var btnback = Titanium.UI.createButton({
        top: 10,
        left: 10,
        title: "Back",
        height: 30,
        width: 60
    });
    var lbl = Titanium.UI.createLabel({
        top: 10,
        left: 100,
        right: 100,
        textAlign: "center",
        text: "SecondWindow",
        font: {
            fontSize: 15,
            fontWeight: "bold"
        }
    });
    $.SecondWindow.add(lbl);
    btnback.addEventListener("click", function() {
        $.SecondWindow.close();
    });
    $.SecondWindow.add(btnback);
    var btnCloseAll = Titanium.UI.createButton({
        top: 150,
        left: 10,
        title: "To Index",
        height: 30,
        width: 90
    });
    btnCloseAll.addEventListener("click", function() {
        Alloy.Globals.closeme();
        $.SecondWindow.close();
    });
    $.SecondWindow.add(btnCloseAll);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;