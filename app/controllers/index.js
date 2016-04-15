var items = [];

var AeroGearPush = require('AeroGearPush').init({
	pushServerURL : "https://unifiedpush-edewit.rhcloud.com/ag-push/",
	sendMetricInfo: true,
	android: {
		senderID : "517285908032",
		variantID : "944ad613-5917-46e1-89ba-040c1006ee54",
		variantSecret : "4260645d-203b-4a14-b7dc-debf2a162e9a"
    },
	ios: { 
	    variantID: "f04fbf88-305b-4370-9006-d7019cce4991",
	    variantSecret: "d8709c28-6969-4389-a4ac-705ecc903f99"
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
