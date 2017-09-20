var x = "<div class='overlay'><img src='/public/img/loading.gif' /></div>";


console.log($(window).width(),$(window).height());

var w = $(window).width();
var z = w/2-50;
var y = $(window).height()/2-50;
$('body').prepend(x);
$('.overlay').css({
  'margin-top':0,
  'padding-top':y,
  width:$(window).width(),
  height:$(window).height(),
  'z-index':"1000",
  'opacity':'0.3',
  'position':'absolute'
})

$('.overlay>img').css({

  display:'block',
  width:100,
  height:100,
  'margin-left':z
 
})
$(document).on('ajaxStart',function () {  
  $('.overlay').show();
})
$(document).on('ajaxStop',function () {  
  $('.overlay').hide();
})