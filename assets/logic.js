$("button").on("click", function () {
  console.log("button-clicked");
  var product = $(this).attr("data-emotion");

  console.log("button");

  var queryURL = "https://api.otreeba.com/v1/edibles?count=50";

  // firebase.initializeApp(config);

  // var database = firebase.database();

  $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function (response) {

      var drinks = response.data.filter(function(edible) {
        return edible.name === "TechMeds Syrup - 250mg THC - Strawberry";
      })
      var candy = response.data.filter(function(edible) {
        return edible.type === "candy";
      })

      

      console.log(drinks);
      console.log(candy);
    });

    
});