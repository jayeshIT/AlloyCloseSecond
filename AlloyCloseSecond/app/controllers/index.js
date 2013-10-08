var btn = Titanium.UI.createButton({
	title : 'First',
	right : 10,
	top : 10,
	height : 30,
	width : 60
});

var lbl = Titanium.UI.createLabel({
	top : 10,
	left : 100,
	right : 100,
	textAlign : 'center',
	text : 'Index',
	font:
	{
		fontSize : 15,
		fontWeight :'bold'
	}
});
$.container.add(lbl);
btn.addEventListener('click', function(e) {
	var FirstWin = Alloy.createController('FirstWindow').getView();
	FirstWin.open();
});
$.container.add(btn);

$.container.open();

