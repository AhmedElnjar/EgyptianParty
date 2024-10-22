/*leftmenu*/

$(".openNav").on("click", function () {
  $("#leftMenu").animate({ width: "250px" }, 50);
  $("#home-content").animate({ marginLeft: "250px" }, 50);
});

$(".closebtn").on("click", function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $("#home-content").animate({ marginLeft: "0px" }, 50);
});

/*scrollmenu*/
$("#leftMenu a").on("click", function () {
  let sectionId = $(this).attr("href");

  let positionOfSection = $(sectionId).offset().top;

  $("html , body").animate({ scrollTop: positionOfSection }, 2000);
});

/*Accordion*/

$("#sliderDown .toggle").on("click", function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

/*textarea*/

var maxLength = 100;
$("textarea").keyup(function () {
  let length = $(this).val().length;
  let AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(AmountLeft);
  }
});
