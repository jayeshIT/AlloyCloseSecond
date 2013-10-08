var btnback = Titanium.UI.createButton({
	top : 10,
	left : 10,
	title : 'Back',
	height : 30,
	width : 60
});
var btnnext = Titanium.UI.createButton({
	top : 10,
	right : 10,
	title : 'Second',
	height : 30,
	width : 60
});
var lbl = Titanium.UI.createLabel({
	top : 10,
	left : 100,
	right : 100,
	textAlign : 'center',
	text : 'FirstWindow',
	font:
	{
		fontSize : 15,
		fontWeight :'bold'
	}
});
$.FirstWindow.add(lbl);
btnback.addEventListener('click', function(e) {

	$.FirstWindow.close();
});
btnnext.addEventListener('click', function(e) {

	var secondWin = Alloy.createController('SecondWindow').getView();
	secondWin.open();
});

Alloy.Globals.closeme = function()
{
	$.FirstWindow.close();
}
$.FirstWindow.add(btnback);
$.FirstWindow.add(btnnext);
