
 /* In the next code we set up the coordinates of the “Accenture Headquarters: Dublin, Ireland, using Google Maps tiles.
 */
    const map = L.map('map').setView([53.348372, //latitude
    -6.279154 ], //longitude
        13);    //zoom

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,

        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: 'Copyright Google Maps'
        }).addTo(map);
        var marker = L.marker([53.348372, -6.279154]).addTo(map); // This is the marker (marks on Accenture Headquarters: Dublin, Ireland)
        var circle = L.circle([53.353016, -6.312957], {radius: 600}).addTo(map);//Add a circle to map: in this case you should 
        //indicate the radius of the circle in meter. For this example, Accenture Headquarters: Dublin, Ireland marked but not circled, because both have not same 
        //latitude and longitude coordinates.

        // create a red polygon from an array of LatLng points
        var latlngs = [[53.356398723448805, -6.305084183219093],[ 53.35642156817638, -6.3057348823744235],[ 53.355953248813584, -6.3051798742713485]];      
        var polygon = L.polygon(latlngs, {color: 'red', fillOpacity: 0.8, weight: 6 }).addTo(map);
        var popup = L.popup() //Sometimes you need to attach information in your map. Use this code to add a popup.
           .setLatLng([53.1123, -6.01])
           .setContent("Testing a popup.")
           .openOn(map);
           /* We also can add a popup to our objects as makers, polygons, circles, etc. 
           In this case now the above popup will not work (Testing a popup) */
            marker.bindPopup("Example to show how a popup works (Dublin, Ireland).Please click a big circle on the left.").openPopup();
            circle.bindPopup("Thank you for clicking me. This is Phoenix Park, Dublin, Ireland. It is so green and beautiful. (Example to show how a circle works. Please click a red polygon.)");
            polygon.bindPopup("Danger! Wild animalas! Do not approach. (Example to show how a polygon works, Dublin Zoo.)");
            /* You can interact with the map using events. Every object has its corresponding event which can be used as a function. 
            It allows you to react to user interaction. With this code, you can click anywhere on the map to view the coordinates of that point.
             It will show an alert like "You clicked the map at LatLng(43.101484, -79.018822)" */
            function onMapClick(e) {
            alert("You clicked the map at " + e.latlng);
          }
            map.on('click', onMapClick); 


