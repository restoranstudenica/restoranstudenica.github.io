/*LOAD MORE*/
$("#ucitaj").click(function(){
    $("#nestaje").fadeIn("slow", function(){});
})
/*SCROLL BAR*/
$(document).on("scroll", function(){
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;
    
    $(".progresss").css("width", progress + "%");
  })
