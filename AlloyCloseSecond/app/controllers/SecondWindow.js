var btnback = Titanium.UI.createButton({
	top : 10,
	left : 10,
	title : 'Back',
	height : 30,
	width : 60
});
var lbl = Titanium.UI.createLabel({
	top : 10,
	left : 100,
	right : 100,
	textAlign : 'center',
	text : 'SecondWindow',
	font : {
		fontSize : 15,
		fontWeight : 'bold'
	}
});
$.SecondWindow.add(lbl);
btnback.addEventListener('click', function(e) {
	$.SecondWindow.close();
});
$.SecondWindow.add(btnback);

var btnCloseAll = Titanium.UI.createButton({
	top : 150,
	left : 10,
	title : 'To Index',
	height : 30,
	width : 90
});
btnCloseAll.addEventListener('click', function(e) {
	Alloy.Globals.closeme();
	$.SecondWindow.close()
});
$.SecondWindow.add(btnCloseAll);
