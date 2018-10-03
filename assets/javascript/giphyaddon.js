// (The function to split off between giphy or pot)

// $(".giphyOrPot").on("click", function){}

// if >21 button clicked {

// "callGiphy"
// [function name of function to call spotify]
// [function name of function to call food]
// }
//if 21+ button clicked {
//  [function name of function to call otreeba]
// [function name of function to call spotify]
// [function name of function to call food]


function callGiphy(mood) {
  console.log("Button clicked callGiphy function recoginzied");

  console.log (mood)
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    mood + "&api_key=6mwldFoAeaR4pL1gvMFM0z6qKW0T6gX3&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (response) {
      $("#pot").empty();
      var results = response.data;
      console.log(response)
      for (var i = 0; i < results.length; i++) {
        
          var thingDiv = $("<div>");
          var rating = results[i].rating;
          console.log(rating)
          console.log(results[i]);
          var thingImg = $("<img>");    
          thingImg.attr("src", results[i].images.fixed_height.url);
          thingDiv.append(thingImg);

          $("#pot").prepend(thingDiv);
        }
        })
      }
      $("button").on("click", function (mood) {
        //if statement regarding under 21
        console.log("emoji is being clicked");
        console.log(mood)
        
        var mood = $(this).data("giphytrigger"); 
        callGiphy(mood);
      })
    