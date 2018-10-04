$(document).ready(function () {
  console.log("mapaddon.js has loaded");
 });
 
 function zomatoAPI() {
  console.log("Button clicked zomato function recognized")
  var coordinates;
  if ("geolocation" in navigator) {
    // check if geolocation is supported/enabled on current browser
    navigator.geolocation.getCurrentPosition(success, error);
 
    function success(position) {
 
      console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
      console.log("position coordinates", position.coords);
 
      zomatoAjax(position.coords);
    }
 
    function error(error_message) {
      // for when getting location results in an error
      console.error('An error has occured while retrieving location', error_message);
      getIPgeolocation()
      
    };
  } else {
    console.log('geolocation is not enabled on this browser');
    // if no geolocation is allowed, set "coordinates" = ipaddress location lookup value
    getIPgeolocation();
 
  }
 
 
  function zomatoAjax(coordinates) {
 
    console.log(coordinates.latitude);
 
    console.log("ARE YOU HITTING")
    var queryURL = "https://developers.zomato.com/api/v2.1/geocode?lat=" + coordinates.latitude + "&lon=" + coordinates.longitude;
    console.log(queryURL)
 
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
          "user-key": "050d7c78c8ecb450b7884fc01f6b4e87"
        }
      })
      .then(function (response) {
        var results = response.nearby_restaurants;
        console.log(results)
        console.log("response", response.nearby_restaurants)
        $("#food").empty();
        results = results.sort(function() {
         return Math.random() - .5;
        })
        var title = $("<p>").text("Here's what we recommend to improve your mood--try a new place near you!")
        var array = response.nearby_restaurants
 
        for (var i = 0; i < 5; i++) {
          var restaurantDiv = $("<div>");
          var restaurantAddress =  $("<p>").text("Address: " + array[i].restaurant.location.address)
          var restaurantName = $("<p>").text("Name :  " + array[i].restaurant.name);
          var restaurantMenu = $("<a>").text("Menu").attr("href", array[i].restaurant.menu_url);
 
          console.log(array[i].restaurant.menu_url)
          restaurantDiv.append(restaurantName)
          restaurantDiv.append(restaurantAddress)
          restaurantDiv.append(restaurantMenu);
 
 
          $("#food").prepend(restaurantDiv);
          $("#food").prepend(title);
 
 
        }
      });
  }
 
  function getIPgeolocation() {
    console.log("getIPgeolocation function triggered");
    queryURL = "http://api.ipstack.com/check?access_key=7ee44dd1caa2533906f7ed1bc758b9d2"
 
    $.ajax({
        url: queryURL,
        method: "GET",
 
      })
      .then(function (response) {
        var results = response.data;
        console.log(response);
 
        zomatoAjax(response);
      })
  }
 }
 
 
 
 // };
 // }
 
 
 $("button").on("click", function () {
  console.log("emoji is being clicked");
  zomatoAPI();
 })