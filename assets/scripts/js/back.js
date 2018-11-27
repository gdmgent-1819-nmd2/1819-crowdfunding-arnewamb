var closeBtn = $("#closeBtn");
var openBtn = $("#openBtn");
var backWindow = $(".backWindow");
var customAmount = $(".customAmount");
var radius = $(".form-check-input");
radius.click(function() {
  if (customAmount.hasClass("hide") == true){
    customAmount.removeClass("hide");
  }
})
openBtn.click(function() {
  if (backWindow.hasClass("hide") === true) {
    backWindow.removeClass("hide");
    openBtn.css(
    "border-radius","0px 0px 30px 30px" )
  }
  else{
    backWindow.addClass("hide");
    openBtn.css(
    "border-radius","30px 30px 30px 30px" )
  }
});
closeBtn.click(function() {
  // console.log(backWindow.hasClass("hide"));
  backWindow.addClass("hide");
  openBtn.css(
  "border-radius","30px 30px 30px 30px" )
});
