var tl=new TimelineMax;tl.staggerTo(".nav li",.3,{opacity:1,marginRight:0},.1),tl.pause(),$(".burger").click(function(){$(".burger").hasClass("cross")?($("#nav-main").addClass("d-none"),$(".burger").removeClass("cross"),tl.reverse()):($("#nav-main").removeClass("d-none"),$(".burger").addClass("cross"),tl.play())});