
// button does not work with this function
$("button").on("click", function (weed) {
  var weed = $(this).data("otreeba");
  
  console.log("button-clicked");
  
  console.log("button");

  var queryURL = "https://api.otreeba.com/v1/strains?count=5";
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function (response) {
    var results = response.data;
    // $("#strains-appear-here").empty();
      for (var i = 0; i < 5; i++) {
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
        var drinksDiv = $("<div>");
        console.log(results[i].image)
        console.log(results[i].name)
        console.log(results[i].thc)
        console.log(results[i].type)
        var p = $("<p>").text("Name :  " + results[i].name)
        var t = $("<p>").text("THC :  " + results[i].thc)
        var typ = $("<p>").text("Type :  " + results[i].type)
        drinksDiv.append(p, t, typ)
        var drinksImage = $("<img>");
        drinksImage.attr("src", results[i].image)
        drinksDiv.append(drinksImage);
        //.images.fixed_height.url);
        $('#strains-appear-here').append(drinksDiv)
      }

      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var candyDiv = $("<div>");
        console.log(results[i].image)
        console.log(results[i].name)
        console.log(results[i].type)
        var p = $("<p>").text("Name : " + results[i].name)
        var t = $("<p>").text("THC : " + results[i].thc)
        var typ = ("<p>").text("Type : " + results[i].type)
        candyDiv.append(p, t, typ)
        var candyImage = $("<img>")
        candyImage.attr("src", results[i].image)
        candyDiv.append(candyImage);
        $('displayCandy').append(candyDiv)

        $("#strains-appear-here").prepend(candyDiv);
      }
      var slideIndex = 1;
      showSlides(slideIndex);

      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
          slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }


      // drinksDiv.append(drinksImage);

      //$("#img-appear-here").prepend()



      // console.log(drinks);
      // console.log(candy);
    });


