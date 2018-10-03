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
        var results = response.data;
        console.log(response)
        console.log(response.nearby_restaurants)

        $("#food").empty();
        var title = $("<p>").text("Here's what we recommend to improve your mood--try a new place near you!")
        var array = response.nearby_restaurants
        for (var i = 0; i < 5; i++) {
          var restaurantDiv = $("<div>");
          var restaurantAddress = array[i].restaurant.location.address
          var restaurantName = array[i].restaurant.name;
          var restaurantMenu = $("<button>");
          restaurantMenu.text("MENU");
          restaurantMenu.attr("src", array[i].restaurant.menu_url);
          restaurantMenu.addClass("btn btn-info btn-lg")
          // restaurantMenu.attibute(data-toggle, "modal")
          // restaurantMenu.attribute(data-target, "#myModal")




          var p = $("<p>").text(restaurantName + restaurantAddress + restaurantMenu);
          var restaurantImg = $("<img>");

          restaurantImg.attr("src", array[i].restaurant.photos_url);
          console.log(array[i].restaurant.menu_url)
          restaurantDiv.append(p);
          restaurantDiv.append(restaurantImg)
          restaurantDiv.append(restaurantMenu);

          $("#food").prepend(restaurantDiv);
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