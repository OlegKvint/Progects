/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

!function(t){var o=function(){};t.extend(o.prototype,{name:"Googlemaps",options:{lat:53.553407,lng:9.992196,marker:!0,popup:!1,text:"",zoom:13,mapCtrl:2,zoomWhl:!0,mapType:0,typeCtrl:!0,overviewCtrl:!0,directions:!0,directionsDestUpdate:!1,directionsTravelMode:0,locale:"en",mainIcon:"red-dot",otherIcon:"blue-dot",iconUrl:"https://maps.google.com/mapfiles/ms/micons/",msgFromAddress:"From address: ",msgGetDirections:"Get directions",msgEmpty:"Please fill in your address.",msgNotFound:"Sorry, address not found!",msgAddressNotFound:", not found!"},initialize:function(o,i){this.options=t.extend({},this.options,i),this.container=o,this.setupMap(),this.options.directions&&this.setupDirections()},setupMap:function(){this.map=new google.maps.Map(this.container.get(0),{mapTypeId:google.maps.MapTypeId.ROADMAP}),this.map.setOptions({navigationControl:1==this.options.mapCtrl||2==this.options.mapCtrl}),this.map.setOptions({navigationControlOptions:{style:1==this.options.mapCtrl?google.maps.NavigationControlStyle.SMALL:google.maps.NavigationControlStyle.DEFAULT}}),this.map.setOptions({scrollwheel:!!this.options.zoomWhl}),1==this.options.mapType&&this.map.setOptions({mapTypeId:google.maps.MapTypeId.SATELLITE}),2==this.options.mapType&&this.map.setOptions({mapTypeId:google.maps.MapTypeId.HYBRID}),3==this.options.mapType&&this.map.setOptions({mapTypeId:google.maps.MapTypeId.TERRAIN}),this.map.setOptions({mapTypeControl:!!this.options.typeCtrl}),this.infowindow=new google.maps.InfoWindow,this.options.marker?this.addMarkerLatLng(this.options.lat,this.options.lng,this.options.text,!0):this.centerMap(this.options.lat,this.options.lng)},createMarker:function(t,o,i){var e=this,s=this.map,n=this.infowindow,p=new google.maps.MarkerImage(this.options.iconUrl+i+".png",new google.maps.Size(32,32),new google.maps.Point(0,0),new google.maps.Point(16,32)),a=i.match("pushpin")?this.options.iconUrl+"pushpin_shadow.png":this.options.iconUrl+"msmarker.shadow.png",r=new google.maps.MarkerImage(a,new google.maps.Size(56,32),new google.maps.Point(0,0),new google.maps.Point(16,32)),l=new google.maps.Marker({position:t,icon:p,shadow:r,map:this.map});return(o||this.options.directionsDestUpdate)&&google.maps.event.addListener(l,"click",function(){o&&(n.setContent(o),n.open(s,l)),e.options.directionsDestUpdate&&(e.options.lat=l.getPosition().lat(),e.options.lng=l.getPosition().lng())}),l},centerMap:function(t,o){var i=new google.maps.LatLng(t,o);this.map.setCenter(i),this.map.setZoom(this.options.zoom)},addMarkerLatLng:function(t,o,i,e){var s=this.options.otherIcon;e&&(s=this.options.mainIcon);var n=new google.maps.LatLng(t,o),p=this.createMarker(n,i,s);e&&(this.map.setCenter(n),this.map.setZoom(this.options.zoom)),e&&i&&this.options.popup&&(this.infowindow.setContent(i),this.infowindow.open(this.map,p))},setupDirections:function(){var o=this;this.directionsService=new google.maps.DirectionsService,this.directionsDisplay=new google.maps.DirectionsRenderer,this.directionsDisplay.setMap(this.map),this.directionsDisplay.setPanel(t("<div>").addClass("directions").css("position","relative").insertAfter(this.container).get(0));var i=t("<p>").append('<label for="from-address">'+this.options.msgFromAddress+"</label>").append('<input type="text" name="address" style="margin:0 5px;" />').append('<button type="submit">'+this.options.msgGetDirections+"</button>");t('<form method="get" action="#"></form>').append(i).insertAfter(this.container).bind("submit",function(i){i.preventDefault(),i.stopPropagation(),o.setDirections(t(this))})},setDirections:function(t){var o=this;this.container.parent().find("div.alert").remove();var i=t.find('input[name="address"]').val();if(""===i)this.showAlert(this.options.msgEmpty);else{var e={origin:i,destination:new google.maps.LatLng(this.options.lat,this.options.lng),travelMode:google.maps.DirectionsTravelMode.DRIVING,region:this.options.locale};this.directionsService.route(e,function(t,i){i==google.maps.DirectionsStatus.OK?o.directionsDisplay.setDirections(t):o.showAlert(o.options.msgNotFound)})}},showAlert:function(o){t("<div>").addClass("alert").append(t("<strong>").text(o)).insertAfter(this.container)},refresh:function(){google.maps.event.trigger(this.map,"resize"),this.centerMap(this.options.lat,this.options.lng)}}),t.fn[o.prototype.name]=function(){var i=arguments,e=i[0]?i[0]:null;return this.each(function(){var s=t(this);if(o.prototype[e]&&s.data(o.prototype.name)&&"initialize"!=e)s.data(o.prototype.name)[e].apply(s.data(o.prototype.name),Array.prototype.slice.call(i,1));else if(!e||t.isPlainObject(e)){var n=new o;o.prototype.initialize&&n.initialize.apply(n,t.merge([s],i)),s.data(o.prototype.name,n)}else t.error("Method "+e+" does not exist on jQuery."+o.name)})}}(jQuery);