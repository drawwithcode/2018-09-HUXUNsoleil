var myloc;
var myMap;
var canvas;

var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiaHV4dW4tLWhleSIsImEiOiJjanZwcGVybDcwMXFsM3lubnRycDg0MGhzIn0.-I70aEUuLCfjIwUIsikzUA');
var beijingLat = 39.9042;
var beijingLon = 116.4074;

var options = {
  lat: beijingLat,
  lng: beijingLon,
  zoom: 3,
style: 'mapbox://styles/huxun--hey/cjvt8e2750s6x1cmj39c6a39t',

  pitch: 0
}

function preload() {
  myloc = getCurrentPosition();

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  var distance = calcGeoDistance(myloc.latitude, beijingLat, myloc.longitude, beijingLon, "km");
  distanceTEXT = Math.round(distance)

  // console.log(distance);

  // put setup code here
}

function draw() {
  clear();
  fill("lightpink");
  var pointhere = myMap.latLngToPixel(myloc.latitude, myloc.longitude);
  var pointsh = myMap.latLngToPixel(beijingLat, beijingLon);

  push()
  strokeWeight(2);
  stroke("blue")
  line(pointhere.x, pointhere.y, pointsh.x, pointsh.y);
  pop()

  ellipse(pointhere.x, pointhere.y, 15);
  ellipse(pointsh.x, pointsh.y, 15);



  fill("pink");
  textFont('Goudy Old Style');
  textSize(30);
  textAlign(CENTER);
  text('HOW FAR ARE YOU FROM BEIJING?', windowWidth / 2, windowHeight *4/ 6);



  fill("hotpink");
  textFont('Goudy Old Style');
  textSize(20);
  text('your Place', pointhere.x - 5, pointhere.y - 20);

  fill("deeppink");
  text('YOU HAVE BEEN  ' + distanceTEXT + ' KM AWAY FROM BEIJING.', windowWidth / 2, windowHeight*5 / 6 - 40);



  // put drawing code here
}
