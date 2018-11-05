/*Andy Kukuc
Geldi Omeri
Daniel Rybski
Professor Krieglstein
ITMD-362-01
Project 2 JavaScript file
24th Oct. 2018*/

/* Slideshow JS */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}

/* Google Map JS */
var map;
var marker;
function initMap()
{
  map = new google.maps.Map(document.getElementById('map'),
  {
    center: {lat: -12.069344, lng: -77.080122},
    zoom: 10,
    mapTypeId: 'roadmap',
    mapTypeControl: true,
    mapTypeControlOptions:
    {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      mapTypeIds: ['roadmap', 'satellite'],
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions:
    {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  });

  var contentString =
    '<h1>Pontifical Catholic University of Peru</h1>';

  var Infowindow = new google.maps.InfoWindow(
    {
      content: contentString
    });
    
  var marker = new google.maps.Marker(
  {
    map: map,
    draggable: true,
    position: {lat: -12.069344, lng: -77.080122},
    animation: google.maps.Animation.DROP,
    title: 'Pontifical Catholic University of Peru'
  });

  marker.addListener('click', function()
  {
    Infowindow.open(map, marker);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
