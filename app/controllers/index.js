var items = [];

var $fh = require('feedhenry-titanium');

$fh.push(function (event) {
  items.push({ label: { text: event.alert } });
  $.section.setItems(items);
  $.main.open();
}, function () {
  $.empty.open();
});

$.indicator.show();
$.win.open();
