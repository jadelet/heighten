
$("button").on("click", function () {
  console.log("button-clicked");
  
  console.log("button");

  var queryURL = "https://api.otreeba.com/v1/strains?count=50";

  var strainsArray = ["data", "image", "thc", "type"];

  // var  = $(this).attr("data-edible");
  // var sad = $(this).attr("");
  // var angry = $(this).attr("");
  // var pumped = $(this).attr("");
  // var sleepy = $(this).attr("");
  // var focused = $(this).attr("");
  // var uplifted = $(this).attr("");

  var queryURL = "https://api.otreeba.com/v1/edibles?count=50";

  
  // firebase.initializeApp(config);

  // var database = firebase.database();

  $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function (response) {

     //console.log (response);
      // var drinks = response.data.filter(function(edible) {
      //   return edible.name === ""
      // })
      // var candy = response.data.filter(function(edible) {
      //   return edible.type === "candy";
      // })

       var results = response.data;
      
      for (var i = 0; i < results.length; i++) {
        var drinksDiv =$("<div>");
        console.log(results[i].image)
        console.log(results[i].name)
        console.log(results[i].thc)
        console.log(results[i].type)
        var p =$("<p>").text("Name :  "+results[i].name)
        var t=$("<p>").text("THC :  "+results[i].thc)
        var typ=$("<p>").text("Type :  "+results[i].type)
        drinksDiv.append(p,t,typ) 
         var drinksImage = $("<img>");
        drinksImage.attr("src", results[i].image)
        drinksDiv.append(drinksImage);
         //.images.fixed_height.url);
        $('#displayDrinks').append(drinksDiv)
      }
      
      var results = response.data;

      for (var i =0; i < results.length; i++) {
        var candyDiv =$("<div>");
        console.log(results[i].image)
        console.log(results[i].name)
        console.log(results[i].type)
        var p=$("<p>").text("Name : "+results[i].name)
        var t=$("<p>").text("THC : "+results[i].thc)
        var typ=("<p>").text("Type : "+results[i].type)
        candyDiv.append(p,t,typ)
          var candyImage = $("<img>")
          candyImage.attr("src", results[i].image)
          candyDiv.append(candyImage);
          $('displayCandy').append(candyDiv)

          $("#gifs-appear-here").prepend(candyDiv);
      }
      
       
      // drinksDiv.append(drinksImage);

      //$("#img-appear-here").prepend()

      

      // console.log(drinks);
      // console.log(candy);
    });

    
});