$(document).ready(function(){
    $("#ciudadNombre").oninput = autoCompletar();
    $('#intereses').tagsinput({
                maxTags:4,
                typeahead: {
                    source: ['Buea', 'Douala', 'Kribi', 'Yaounde']
                }
    });
});


function autoCompletar() {
    var options = {
                      types: ['(cities)'],
                      componentRestrictions: {country: "mx"}
                      };
    var input = document.getElementById('ciudadNombre');
    var autocomplete = new google.maps.places.Autocomplete(input, options);
}