// preloader

$('body').jpreLoader({

  // default CSS classes for the preloader
  preMainSection:     '#main-preloader',
  prePerText:         '.preloader-percentage-text',
  preBar:             '.preloader-bar',

  // show percentage value
  showPercentage:     true,

  // enable debug mode
  debugMode:          false,

  // function
  splashFunction:     function() {}
  
});
// tooltip 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// type writter part
$(document).ready(function() {
  
  typing( 0, $('.typewriter-text').data('text') );

  function typing( index, text ) {
    
    var textIndex = 1;

    var tmp = setInterval(function() {
      if ( textIndex < text[ index ].length + 1 ) {
				$('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
				textIndex++;
			} else {
        setTimeout(function() { deleting( index, text ) }, 3000);
        clearInterval(tmp);
      }

		}, 50);

	}

	function deleting( index, text ) {

    var textIndex = text[ index ].length;

    var tmp = setInterval(function() {

      if ( textIndex + 1 > 0 ) {
        $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
        textIndex--;
      } else {
        index++;
        if ( index == text.length ) { index = 0; }
        typing( index, text );
        clearInterval(tmp);
      }

		}, 30)

  }

});

// counter
$(function(){
  $('.count-num').rCounter({
    duration: 30
  });
});

// postfolio
$('#iv').imageview({
  targetSelector: 'a',
  srcAttr: 'href',
  titleAttr: 'title'
});


// testimonial

function t_page_1(){
  var t1=document.getElementById('t1');
  var t2=document.getElementById('t2');
  var t3=document.getElementById('t3');
  var t4=document.getElementById('t4');
  var dot1=document.getElementById('dot1');
  var dot2=document.getElementById('dot2');
  t3.style.opacity="1";
  t4.style.opacity="1";
  t1.style.opacity="0";
  t2.style.opacity="0";
  dot1.style.background="rgb(31, 195, 147)";
  dot2.style.background="transparent";
  return false;
}
function t_page_2(){
  var t1=document.getElementById('t1');
  var t2=document.getElementById('t2');
  var t3=document.getElementById('t3');
  var t4=document.getElementById('t4');
  var dot1=document.getElementById('dot1');
  var dot2=document.getElementById('dot2');
  t1.style.opacity="1";
  t2.style.opacity="1";
  t3.style.opacity="0";
  t4.style.opacity="0";
  dot1.style.background="transparent";
  dot2.style.background="rgb(31, 195, 147)";
  return false;
}
// contact form
function my_form(){
  var f_name=document.getElementById('f_name');
  var f_name_value=f_name.value;
  var l_name=document.getElementById('l_name');
  var l_name_value=l_name.value;
  var message=document.getElementById('message_box');
  var messageValue=message.value;
  var messageLeangth=messageValue.length;
  var  btn=document.getElementById('btn_stay');
  if (f_name_value=="") {
    document.getElementById('notice').innerHTML="First Name can't be blank!";
    document.getElementById('f_name').style.border="1px solid red";
    document.getElementById('l_name').style.border="1px solid #b2bec3";
    document.getElementById('message_box').style.border="1px solid #b2bec3";
    document.getElementById('notice').style.display="block";
    document.getElementById('btn_stay').style.display="block";
    return false;
  }else if(l_name_value==""){
    document.getElementById('notice').innerHTML="Last Name can't be blank!"
    document.getElementById('l_name').style.border="1px solid red";
    document.getElementById('f_name').style.border="1px solid #b2bec3";
    document.getElementById('message_box').style.border="1px solid #b2bec3";
    document.getElementById('notice').style.display="block";
    document.getElementById('btn_stay').style.display="block";
    return false;
  }else if(messageValue=="" || messageLeangth<=29){
    document.getElementById('notice').innerHTML="message field can't be blank! At least enter 30 charecter! ~ You enter: "+messageLeangth;
    document.getElementById('l_name').style.border="1px solid #b2bec3";
    document.getElementById('f_name').style.border="1px solid #b2bec3";
    document.getElementById('message_box').style.border="1px solid red";
    document.getElementById('notice').style.display="block";
    document.getElementById('btn_stay').style.display="block";
    return false;
  }else{
    alert("message Send Sucessful!");
    document.getElementById("newForm").reset();
    document.getElementById("newForm").style.display="none";
    document.getElementById('btn_stay').style.display="none";
    document.getElementById('Thanks_g').style.display="block";
    document.getElementById("success_msg").innerHTML="Thanks for contacting us! We will be in touch with you shortly.";

  }

}
function dis_mis(){
    document.getElementById('notice').style.display="none";
    document.getElementById('btn_stay').style.display="none";
}



// smoth scroll


// jQuery noConflict declaration
jQuery.noConflict();
// // run jQuery
jQuery(document).ready(function( $ ){
//   // jQuery Smooth <a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a> Window
  $(this).smoothScrollWindow();
});


