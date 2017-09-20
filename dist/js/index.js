(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
require('./common/ajaxloading')

/*折叠更多*/

$(document).on('click','.morebtn',function(){
 $('.showhidden').toggle()
})


/*请求菜单*/
$.get('http://139.199.192.48:9090/api/getindexmenu',function(data){
  $('.items').html(template('caidan',data.result))
  console.log(data);
  
})
$.get('http://139.199.192.48:9090/api/getmoneyctrl',function(data){
  console.log(data.result[1].productName);
  console.log(data);
  $('.goodlist-content>ul').html(template('zhekou',data.result))
})

$('#totop')[0].onclick = function(){
document.body.scrollTop = document.documentElement.scrollTop = 0;
}
},{"./common/ajaxloading":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2FqYXhsb2FkaW5nLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHggPSBcIjxkaXYgY2xhc3M9J292ZXJsYXknPjxpbWcgc3JjPScvcHVibGljL2ltZy9sb2FkaW5nLmdpZicgLz48L2Rpdj5cIjtcclxuXHJcblxyXG5jb25zb2xlLmxvZygkKHdpbmRvdykud2lkdGgoKSwkKHdpbmRvdykuaGVpZ2h0KCkpO1xyXG5cclxudmFyIHcgPSAkKHdpbmRvdykud2lkdGgoKTtcclxudmFyIHogPSB3LzItNTA7XHJcbnZhciB5ID0gJCh3aW5kb3cpLmhlaWdodCgpLzItNTA7XHJcbiQoJ2JvZHknKS5wcmVwZW5kKHgpO1xyXG4kKCcub3ZlcmxheScpLmNzcyh7XHJcbiAgJ21hcmdpbi10b3AnOjAsXHJcbiAgJ3BhZGRpbmctdG9wJzp5LFxyXG4gIHdpZHRoOiQod2luZG93KS53aWR0aCgpLFxyXG4gIGhlaWdodDokKHdpbmRvdykuaGVpZ2h0KCksXHJcbiAgJ3otaW5kZXgnOlwiMTAwMFwiLFxyXG4gICdvcGFjaXR5JzonMC4zJyxcclxuICAncG9zaXRpb24nOidhYnNvbHV0ZSdcclxufSlcclxuXHJcbiQoJy5vdmVybGF5PmltZycpLmNzcyh7XHJcblxyXG4gIGRpc3BsYXk6J2Jsb2NrJyxcclxuICB3aWR0aDoxMDAsXHJcbiAgaGVpZ2h0OjEwMCxcclxuICAnbWFyZ2luLWxlZnQnOnpcclxuIFxyXG59KVxyXG4kKGRvY3VtZW50KS5vbignYWpheFN0YXJ0JyxmdW5jdGlvbiAoKSB7ICBcclxuICAkKCcub3ZlcmxheScpLnNob3coKTtcclxufSlcclxuJChkb2N1bWVudCkub24oJ2FqYXhTdG9wJyxmdW5jdGlvbiAoKSB7ICBcclxuICAkKCcub3ZlcmxheScpLmhpZGUoKTtcclxufSkiLCJyZXF1aXJlKCcuL2NvbW1vbi9hamF4bG9hZGluZycpXHJcblxyXG4vKuaKmOWPoOabtOWkmiovXHJcblxyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCcubW9yZWJ0bicsZnVuY3Rpb24oKXtcclxuICQoJy5zaG93aGlkZGVuJykudG9nZ2xlKClcclxufSlcclxuXHJcblxyXG4vKuivt+axguiPnOWNlSovXHJcbiQuZ2V0KCdodHRwOi8vMTM5LjE5OS4xOTIuNDg6OTA5MC9hcGkvZ2V0aW5kZXhtZW51JyxmdW5jdGlvbihkYXRhKXtcclxuICAkKCcuaXRlbXMnKS5odG1sKHRlbXBsYXRlKCdjYWlkYW4nLGRhdGEucmVzdWx0KSlcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcclxufSlcclxuJC5nZXQoJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRtb25leWN0cmwnLGZ1bmN0aW9uKGRhdGEpe1xyXG4gIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0WzFdLnByb2R1Y3ROYW1lKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAkKCcuZ29vZGxpc3QtY29udGVudD51bCcpLmh0bWwodGVtcGxhdGUoJ3poZWtvdScsZGF0YS5yZXN1bHQpKVxyXG59KVxyXG5cclxuJCgnI3RvdG9wJylbMF0ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XHJcbn0iXX0=
