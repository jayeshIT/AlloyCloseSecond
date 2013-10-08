function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FirstWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.FirstWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "FirstWindow"
    });
    $.__views.FirstWindow && $.addTopLevelView($.__views.FirstWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var btnback = Titanium.UI.createButton({
        top: 10,
        left: 10,
        title: "Back",
        height: 30,
        width: 60
    });
    var btnnext = Titanium.UI.createButton({
        top: 10,
        right: 10,
        title: "Second",
        height: 30,
        width: 60
    });
    var lbl = Titanium.UI.createLabel({
        top: 10,
        left: 100,
        right: 100,
        textAlign: "center",
        text: "FirstWindow",
        font: {
            fontSize: 15,
            fontWeight: "bold"
        }
    });
    $.FirstWindow.add(lbl);
    btnback.addEventListener("click", function() {
        $.FirstWindow.close();
    });
    btnnext.addEventListener("click", function() {
        var secondWin = Alloy.createController("SecondWindow").getView();
        secondWin.open();
    });
    Alloy.Globals.closeme = function() {
        $.FirstWindow.close();
    };
    $.FirstWindow.add(btnback);
    $.FirstWindow.add(btnnext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;