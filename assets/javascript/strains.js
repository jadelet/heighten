$(document).ready(function () {
  
});
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
        
        strainsDiv.prepend(strainsImage);
        //.images.fixed_height.url);
      
        $('#displayStrains').append(strainsDiv)
        
      }
 
 });
 });

  






