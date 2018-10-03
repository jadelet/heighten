
// button does not work with this function
$("#button").on("click", function (a) {
  console.log("button-clicked");
  
  console.log("button");

  var queryURL = "https://api.otreeba.com/v1/strains?count=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function (response) {
    var results = response.data;
    // $("#strains-appear-here").empty();
      for (var i = 0; i < results.length; i++) {
        var strainsDiv =$("<div>");
        console.log(results[i].image)
        console.log(results[i].name)
        console.log(results[i].thc)
        console.log(results[i].type)
        var p =$("<p>").text("Name :  "+results[i].name)
        var t=$("<p>").text("THC :  "+results[i].thc)
        var typ=$("<p>").text("Type :  "+results[i].type)
        strainsDiv.append(p,t,typ) 
         var strainsImage = $("<img>");
        strainsImage.attr("src", results[i].image)
        strainsDiv.append(strainsImage);
         //.images.fixed_height.url);
        $('#strains-appear-here').append(strainsDiv)
      }
    })
  });

  // button does work in this function because it is attached to ("#sleepy")
  $("#sleepy").on("click", function (a) {
    console.log("button-clicked");
    
    console.log("sleepy");
  
    var queryURL = "https://api.otreeba.com/v1/strains?count=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
    .then(function (response) {
      var results = response.data;
      // $("#strains-appear-here").empty();
        for (var i = 0; i < results.length; i++) {
          var strainsDiv =$("<div>");
          console.log(results[i].image)
          console.log(results[i].name)
          console.log(results[i].thc)
          console.log(results[i].type)
          var p =$("<p>").text("Name :  "+results[i].name)
          var t=$("<p>").text("THC :  "+results[i].thc)
          var typ=$("<p>").text("Type :  "+results[i].type)
          strainsDiv.append(p,t,typ) 
           var strainsImage = $("<img>");
          strainsImage.attr("src", results[i].image)
          strainsDiv.append(strainsImage);
           //.images.fixed_height.url);
          $('#strains-appear-here').append(strainsDiv)
        }
      })
    });