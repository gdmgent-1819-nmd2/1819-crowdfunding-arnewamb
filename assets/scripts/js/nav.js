/** Gestion du burger **/
//$( "nav" ).hide();


var tl = new  TimelineMax ();
tl.staggerTo('.nav li', 0.3, {'opacity': 1, 'marginRight': 0}, 0.1);
tl.pause();

$('.burger').click(function() {
  if(!$('.burger').hasClass('cross')){
    $('#nav-main').removeClass('d-none');
    $('.burger').addClass('cross');
    tl.play();
  } else {
    $('#nav-main').addClass('d-none');
    $('.burger').removeClass('cross');
    tl.reverse();
  }
});
