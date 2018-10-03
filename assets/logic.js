$("button").on("click", function () {
  console.log("button-clicked");

  console.log("button");

  var queryURL = "https://api.otreeba.com/v1/strains?count=50";
  $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function (response) {
      $("#displayStrains").empty();
      var results = response.data;
      results = results.sort(function () {
        return Math.random() - .5;
      })
      for (var i = 0; i < 5; i++) {
        var strainsDiv = $("<div>");
        console.log(results[i].image)
        console.log(results[i].name)
        console.log(results[i].thc)
        console.log(results[i].type)
        var p = $("<p>").text("Name :  " + results[i].name)
        var t = $("<p>").text("THC :  " + results[i].thc)
        var typ = $("<p>").text("Type :  " + results[i].type)
        

        

        // console.log(randomizedArray);
        strainsDiv.append(p, t, typ)
        var strainsImage = $("<img>");
        strainsImage.attr("src", results[i].image)
        strainsDiv.append(strainsImage);
        //.images.fixed_height.url);
        $('#displayStrains').append(strainsDiv)
      }




      // var  = $(this).attr("data-edible");
      // var sad = $(this).attr("");
      // var angry = $(this).attr("");
      // var pumped = $(this).attr("");
      // var sleepy = $(this).attr("");
      // var focused = $(this).attr("");
      // var uplifted = $(this).attr("");

      //  var queryURL = "https://api.otreeba.com/v1/edibles?count=50";


      // // // firebase.initializeApp(config);

      // // // var database = firebase.database();

      // $.ajax({
      //     url: queryURL,
      //     method: "GET"
      //   })

      //   .then(function (response) {
      //     $('#displayDrinks').empty();

          //console.log (response);
          // var drinks = response.data.filter(function(edible) {
          //   return edible.name === ""
          // })
          // var candy = response.data.filter(function(edible) {
          //   return edible.type === "candy";
          // })

          // var randomizedArray = response.data;

          // for (var i = 0; i < 5; i++) {
          //   var drinksDiv = $("<div>");
          //   console.log(randomizedArray[i].image)
          //   console.log(randomizedArray[i].name)
          //   console.log(randomizedArray[i].thc)
          //   console.log(randomizedArray[i].type)
          //   var p = $("<p>").text("Name :  " + randomizedArray[i].name)
          //   var t = $("<p>").text("THC :  " + randomizedArray[i].thc)
          //   var typ = $("<p>").text("Type :  " + randomizedArray[i].type)
          //   drinksDiv.append(p, t, typ)
          //   var drinksImage = $("<img>");
          //   drinksImage.attr("src", randomizedArray[i].image)
          //   drinksDiv.append(drinksImage);
          //   //.images.fixed_height.url);
            
          //   $('#displayDrinks').append(drinksDiv)
          // }

          // var randomizedArray = response.data;

          // for (var i = 0; i < 5; i++) {
          //   var candyDiv = $("<div>");
          //   console.log(randomizedArray[i].image)
          //   console.log(randomizedArray[i].name)
          //   console.log(randomizedArray[i].type)
          //   var p = $("<p>").text("Name : " + randomizedArray[i].name)
          //   var t = $("<p>").text("THC : " + randomizedArray[i].thc)
          //   var typ = ("<p>").text("Type : " + randomizedArray[i].type)
          //   candyDiv.append(p, t, typ)
          //   var candyImage = $("<img>")
          //   candyImage.attr("src", randomizedArray[i].image)
          //   candyDiv.append(candyImage);
          //   $('displayCandy').append(candyDiv)

          // }


          // drinksDiv.append(drinksImage);

          //$("#img-appear-here").prepend()



          // console.log(drinks);
          // console.log(candy);
//         });


     });
});
