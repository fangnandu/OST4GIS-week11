// Leaflet map setup
var map = L.map('map', {
  center: [-33.438321, -70.690991],
  zoom: 4
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/*var testFunction = function() {
  var test = 123
  console.log("testing");
  test = 234
  return test
};
*/

// Include this CSS so that torque knows what to do
var CARTOCSS = [
  'Map {',
    '-torque-frame-count: 256;',
    '-torque-animation-duration: 30;',
    '-torque-time-attribute: "acq_date";',
    '-torque-aggregation-function: "count(1)";',
    '-torque-resolution: 4;',
    '-torque-data-aggregation: linear;',
  '}',
  '#layer {',
    'marker-width: 7;',
    'marker-fill: #EE4D5A;',
    'marker-fill-opacity: 0.9;',
    'marker-line-width: 1;',
    'marker-line-color: #FFFFFF;',
    'marker-line-opacity: 1;',
    'comp-op: lighter;',
  '}',
  '#layer[frame-offset=1] {',
    'marker-width: 9;',
    'marker-fill-opacity: 0.45;',
  '}',
  '#layer[frame-offset=2] {',
    'marker-width: 11;',
    'marker-fill-opacity: 0.225;',
  '}'
].join('\n');

// Create the actual layer to be used
var torqueLayer = new L.TorqueLayer({
  user: 'fangnandu',
  cartocss: CARTOCSS
});
torqueLayer.addTo(map);

torqueLayer.setSQL("SELECT * FROM fire_nrt_v1_5527");
torqueLayer.play();

/*
// On timechange, update the HTML which hovers over the upper right of the map
torqueLayer.on('change:time', function(d) {
  var time = $('<h3>').text('Time - ' + moment(d.time).format('HH:mm'));
  $('div#time-window div').empty();
  $('#time-window div').append(time);
});
*/
//torqueLayer.setSQL("SELECT * FROM fire_nrt_v1_5527 ");
//torqueLayer.play();
/*
// We'll just create some buttons for the first 7 days of cab data
_.each([1, 2, 3], function(num) {
  var button = $('<button>')
    .addClass('btn')
    .addClass('btn-default')
    .text('Play timeline for December ' + num)
    .click(function() {
      $('#time-window').empty();
      $('#time-window')
        .append($('<h1>').text('Date - 2015-'+ num))
        .append($('<div>'));
      torqueLayer.stop();
      torqueLayer.setSQL("SELECT * FROM fire_nrt_v1_5527 WHERE (acq_date >= ('2018-0"+ num +"-01T00:00:00Z') AND pickup_datetime <= ('2018-0" + (num + 1) + "-01T00:00:00Z'))");
      torqueLayer.play();
    });
  $('#button-container').append(button);
});
*/
