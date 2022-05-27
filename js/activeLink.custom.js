// active menu

$(window).scroll(function(){
  if ($(this).scrollTop()>5000) {
    $("#li_7").addClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").removeClass("active_link");
  }else if ($(this).scrollTop()>4150) {
    $("#li_7").removeClass("active_link");
    $("#li_6").addClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").removeClass("active_link");
  }else if ($(this).scrollTop()>3650) {
    $("#li_7").removeClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").addClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").removeClass("active_link");
  }else if ($(this).scrollTop()>2250) {
    $("#li_7").removeClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").addClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").removeClass("active_link");
  }else if ($(this).scrollTop()>1500) {
    $("#li_7").removeClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").addClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").removeClass("active_link");
  }else if ($(this).scrollTop()>550) {
    $("#li_7").removeClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").addClass("active_link");
    $("#li_1").removeClass("active_link");
  }else{
  	$("#li_7").removeClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").addClass("active_link");
  }
});

