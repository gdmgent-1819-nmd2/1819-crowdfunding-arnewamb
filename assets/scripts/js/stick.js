var stickWidth = 991;
var win = $(window);
var menu = $("#menu");
var options = {
    bottoming: false,
    offset_top: 0
};
if (win.width() > stickWidth) {
    $(".stick").stick_in_parent();

    // console.log("stick");
}

else{
  $(".stick").trigger("sticky_kit:detach");

  // console.log("unstick");
}
