var push = require('org.jboss.aerogear.push');
var items = [];

function onNotification(e) {
	items.push({ label: {text: e.alert}});

	$.section.setItems(items);
	$.main.open();
}

function eventSuccess() {
	$.empty.open();
}

function eventError(e) {
	Ti.API.info('Error:' + e.error);
	var alert = Ti.UI.createAlertDialog({
		title : 'Error',
		message : e.error
	});
	alert.show();
}

var pushConfig = {
	pushServerURL : "https://unifiedpush-edewit.rhcloud.com/ag-push/",
	sendMetricInfo: true,
	android: {
		senderID : "517285908032",
		variantID : "944ad613-5917-46e1-89ba-040c1006ee54",
		variantSecret : "4260645d-203b-4a14-b7dc-debf2a162e9a"
	},
	success: eventSuccess,
	error: eventError,
	onNotification: onNotification
};

push.registerPush(pushConfig);

$.indicator.show();
$.win.open();
