$("img").attr("src");  // $ Selector it works for one or more elements.
// $("h1").addClass("NameOfYourClass, AnotherClass")
// $("h1").css("color","red");
// $("h1").text("bye"); it change the text of your h1 tag for "bye".
// $("button").html("<em>Hey</em>"); Change all button tags to Hey.
// $("img").attr("src"); Get the direction from your img file.
$("a").attr("href", "https://www.yahoo.com"); 

  //Ading event listeners with jQuery
$("h1").click(function(){
     $("h1").css("color","purple");
});

 /*for (var i=0; i<5; i++){
     document.querySelectorAll("button")[i].addEventListener("click", function(){
          document.querySelector("h1").style.color = "purple";

     });
}*/

/*$("button").click(function() {
     $("h1").css("color", "purple");
})*/

/*$("h1").keypress(function(event) {
     console.log(event.key);
});*/

/*$(document).keypress(function(event) {
     $("h1").text(event.key);
})*/

/*$("h1").on("mouseover", function(){
     $("h1").css("color","grey");
});*/

//before you can put any html elements before the next one
//after  you can put any html elements after the previous one
//prepend you can put any html before the same tag you selected
//append you can put any html after the same tag you selected


/*$("button").on("click", function (){
     $("h1").fadeToggle();
});*/

/*$("button").on("click", function (){
     $("h1").slideToggle();
});*/

/*$("button").on("click", function (){
     $("h1").animate({opacity:0.5});
});   */  //ONLY CSS PROPERTIES WITH NUMBERS.

$("button").on("click", function (){
     $("h1").slideUp().slideDown().animate({opacity:0.5});
});
