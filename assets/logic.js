

$("button").on("click", function() {
  console.log("button-clicked");
  var product = $(this).attr("data-emotion");

  console.log("button");

var queryURL = "https://api.otreeba.com/v1/products/";  

// firebase.initializeApp(config);

// var database = firebase.database();

$.ajax({
 url: queryURL,
 method: "GET"
})

.then(function(response) {

console.log(response);

var results = response.data;

for (var i = 0; i< results.length; i++) {
// if (!el.value || el.value == '') {
//    el.placeholder = 'placeholdertext';

  var gifDiv = $("<div>");

  var productImage = $("<img>");

  productImage.attr("src", results[i]
  .images.fixed_height.url);

  // gifDiv.append(p);
  gifDiv.append(productImage);

  $("#gifs-appear-here").prepend(gifDiv);
} 


});

});

