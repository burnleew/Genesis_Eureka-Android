function onDeviceReady{
  checkConnection();

  var strLng = getQuerystring("Lng","");
  var strLat = getQuerystring("Lat","");
  var strVenue = getQuerystring("Venue","");
  var strAddress = getQuerystring("Address","");
  var strCity = getQuerystring("City","");
  var strlatlng = strLat + ',' + strLng;
  x$('#progress').setStyle('display','none');
  var latlng = new google.maps.LatLng(strLat, strLng);
  var myOptions = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

strAddress = unescape(strAddress);
strVenue = unescape(strVenue);
strCity = unescape(strCity);
var companyMarker = new google.maps.Marker({  position: latlng, map: map, clickable: true, title:strVenue,zIndex: 1});

var boxText = "<div style='-moz-border-radius: 6px;-webkit-border-radius: 6px;-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.6);-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.6);font-size:10px;border: 1px solid black; color:white;margin-top: 8px;text-align:left; background: black; padding: 5px;'>";
      boxText += "<b>" + strVenue + "</b><br/>" + strAddress + "<br/>" + strCity;
      boxText += "</div>";
      
  var ibOptions = {
          content: boxText
         ,disableAutoPan: false
         ,maxWidth: 0
         ,pixelOffset: new google.maps.Size(-50, 0)			
         ,zIndex: null
         ,boxStyle: { 
             background: "url('images/tipbox.png') no-repeat"
            ,opacity: 0.80
            ,width: "150px"
          }
         ,closeBoxMargin: "13px 5px 5px 5px"
         ,closeBoxURL: "images/close.png"
				 ,closeBoxBorder: 0
         ,infoBoxClearance: new google.maps.Size(1, 1)
         ,isHidden: false
         ,pane: "floatPane"
         ,enableEventPropagation: false
      };
      var ib = new InfoBox(ibOptions);
      google.maps.event.addListener(companyMarker, 'click', function() {ib.open(map, companyMarker); });
}
