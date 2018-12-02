<<<<<<< HEAD
var tl=new TimelineMax;tl.staggerTo(".nav li",.3,{opacity:1,marginRight:0},.1),tl.pause(),$(".burger").click(function(){$(".burger").hasClass("cross")?($(".burger").removeClass("cross"),tl.reverse()):($(".burger").addClass("cross"),tl.play())});
=======
var tl=new TimelineMax;tl.staggerTo(".nav li",.3,{opacity:1,marginRight:0},.1),tl.pause(),$(".burger").click(function(){$(".burger").hasClass("cross")?($(".burger").removeClass("cross"),$("#nav-main").addClass("d-none"),tl.reverse()):($(".burger").addClass("cross"),$("#nav-main").removeClass("d-none"),tl.play())});
>>>>>>> 58875fcdf447fba386b2acfe09de37f3dbf7f7bf
