var items = [];

var AeroGearPush = require('AeroGearPush').init({
    pushServerURL: "<pushServerURL e.g http(s)//host:port/context >",
    alias: "<alias e.g. a username or an email address optional>",
    android: {
      senderID: "<senderID e.g Google Project ID only for android>",
      variantID: "<variantID e.g. 1234456-234320>",
      variantSecret: "<variantSecret e.g. 1234456-234320>"
    },
    ios: {
      variantID: "<variantID e.g. 1234456-234320>",
      variantSecret: "<variantSecret e.g. 1234456-234320>"
    }
});

AeroGearPush.registerDevice({
    extraOptions: {
        categories: ["banana", "apple"]
    },
    onReceive: function(event) {
        // Track Push Open
        var pushId = event.payload["aerogear-push-id"];
        AeroGearPush.trackPushOpenEvent(pushId);

		items.push({ label: {text: event.alert}});
		$.section.setItems(items);
		$.main.open();
    },
    onTokenSuccess: function() {
    	$.empty.open();
    }
});

$.indicator.show();
$.win.open();
