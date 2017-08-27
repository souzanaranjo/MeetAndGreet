$(document).ready(function(){
    initMap();
});

function initMap(){
    var MEX = {lat: 23.4326, lng: -99.1332};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: MEX		
    });

    var Locations = [];
    Locations[0] = {lat: 24.8049008, lng: -107.493355};
    Locations[1] = {lat: 20.6737777, lng: -103.4054541};
    Locations[2] = {lat: 25.6487281, lng: -100.443184};
    Locations[3] = {lat: 32.4966817, lng: -117.087894};
    Locations[4] = {lat: 32.4966817, lng: -117.087894};
    Locations[5] = {lat: 19.390519, lng: -99.4238154}
    Locations[6] = {lat: 21.1213285, lng: -86.9192743}

    var markers = [];

    for(var i = 0; i < 7; i++) {
        markers[i] = new google.maps.Marker({
                    position : Locations[i],
                    map: map
                    });
    }
    
    
}
    