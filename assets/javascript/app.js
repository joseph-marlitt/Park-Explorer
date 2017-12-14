// declaring global variables
var zip
var radius

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://developer.nps.gov/api/v1/campgrounds?limit=10%20=&api_key=FnU7EWa9B2RlDnwnu33mMpYJZuWYhXAbYfGxkFh8",
  "method": "GET",
  "headers": {
    "authorization": "Basic Og==",
    "cache-control": "no-cache",
    "postman-token": "509a7a9e-dd99-d214-70d9-793c94ad5033"
  }
}
$.ajax(settings).done(function (response) {
  var results = response.data;
  $.each(results, function(index, value){
          
          })
  console.log(results);
});


//Search on-click reveals the map and column with information.
$('#submitButton').on('click', function() {
  var zip = $('#address').val().trim();
  var radius = $('#radius').val().trim();
  console.log('Zip: ' + zip);
  console.log('Radius: ' + radius);
})

//Search result gets passed through NPS/Instagram APIs.

// Map opens with 10 results (markers) that are based on location. The map is located in the div id "googleMap".

//A list version of the results of the google search appear on the left column. The column is named div id "infoColumn".

//When a marker is clicked withing Google Maps, it reveals 6 photos within that infoWindow.

//When a photo is clicked, we are taken to that photos link.















//Map Options
      function initMap() {
        var options = {
        center: {lat:45.5231, lng: -122.6765},
          zoom: 8
        };

        var map = new google.maps.Map(document.getElementById('map'), options); 

        //Listen for click on map

        google.maps.event.addListener(map, 'click', 
          function(event){
            //add marker on click
            addMarker({coords:event.latLng});
          });
        // var marker = new google.maps.Marker({
        //  position: {lat:45.5231, lng: -122.6765},
        //    map:map

        // });

        // var infoWindow = new google.maps.InfoWindow({
        //  content: '<h1> Portland, OR </h1>'
        // });

        // marker.addListener('click', function(){
        //  infoWindow.open(map,marker);
        // })


        //create array of markers
        var markers = [
            {
            coords:{lat:45.5231, lng: -122.6765},
            iconImage: '',
            content: '<h1>Portland </h1>'
          },
            {
            coords:{lat:44.9429, lng: -123.0351},
            iconImage: '',
            content: '<h1>Salem </h1>'
          },
            {
            coords:{lat:45.7054, lng: -121.5215},
            iconImage:'',
            content: '<h1>Hood River </h1>'
          }
        ];
        //loop through markers
        for(var i = 0; i <  markers.length; i++){
          //add markers
          addMarker(markers[i]);
        };

        // addMarker({
        //  coords:{lat:45.5231, lng: -122.6765},
        //  iconImage: '',
        //  content: '<h1>Portland </h1>'
        // });
        // addMarker({
        //  coords:{lat:44.9429, lng: -123.0351},
        //  iconImage: '',
        //  content: '<h1>Salem </h1>'
        // });
        // addMarker({
        //  coords:{lat:45.7054, lng: -121.5215},
        //  iconImage:'',
        //  content: '<h1>Hood River </h1>'
        // });

        function addMarker(props){

        var marker = new google.maps.Marker({
        position: props.coords,
      map:map,
      // icon:props.iconImage
      });

        //Displays Icon Image if available
      if(props.iconImage){
        //sets icon image
        marker.setIcon(props.iconImage);
      }

      if (props.content) {
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
        });

        marker.addListener('click', function(){
              infoWindow.open(map,marker);
            });
        }
    } 
  } 