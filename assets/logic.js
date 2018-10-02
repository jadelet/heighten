
$("button").on("click", function () {
  console.log("button-clicked");
  
  console.log("button");

  var queryURL = "https://api.otreeba.com/v1/edibles";

  // var  = $(this).attr("data-edible");
  // var sad = $(this).attr("");
  // var angry = $(this).attr("");
  // var pumped = $(this).attr("");
  // var sleepy = $(this).attr("");
  // var focused = $(this).attr("");
  // var uplifted = $(this).attr("");



  
 

  // firebase.initializeApp(config);

  // var database = firebase.database();

  $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function (response) {

     console.log (response);
      var drinks = response.data.filter(function(edible) {
        return edible.name === "TechMeds Syrup - 250mg THC - Strawberry" , "CannaAthlete Nectar - Natural Agave - 500mg THC";
      })
      var candy = response.data.filter(function(edible) {
        return edible.type === "candy";
      })

      

      console.log(drinks);
      console.log(candy);
    });

    
});