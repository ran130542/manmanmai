(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function getpath(paths) {
  var pathstr = location.search.slice(1);
  var patharr = pathstr.split('&');
  var obj = {};
  for(var i=0;i<patharr.length;i++){
    var arr = patharr[i].split('=');
    obj[arr[0]] = arr[1];
    console.log(obj);
  }
  return paths?obj[paths]:obj;
}
module.exports.getpath = getpath;
},{}],2:[function(require,module,exports){
var getp = require('./getpath');
p = getp.getpath('productid')
$('#totop')[0].onclick = function(){
document.body.scrollTop = document.documentElement.scrollTop = 0;
}
$.get('http://139.199.192.48:9090/api/getproduct?productid=10',function(data){
  $('.xxx').html(template('gooddetail',data.result));
  var categoryId = data.result[0].categoryId;
  var productName = data.result[0].productName;
  $.get('http://139.199.192.48:9090/api/getcategorybyid?categoryid='+categoryId,function(data){
    data.result.categoryId = categoryId;
    productName =   productName.replace(/\s+/g,"").substr(0,20);
    data.result[0].productName = productName.trim();
    console.log(categoryId,productName,data);
    $('.nav').html(template('goodcate',data.result))
  })
})
$.get('http://139.199.192.48:9090/api/getproductcom?productid=9',function(data){
  $('.yyy').html(template('commenttail',data.result))
})
},{"./getpath":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvcmFuL2dldHBhdGguanMiLCJzcmMvanMvcmFuL2dldHByb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBnZXRwYXRoKHBhdGhzKSB7XHJcbiAgdmFyIHBhdGhzdHIgPSBsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSk7XHJcbiAgdmFyIHBhdGhhcnIgPSBwYXRoc3RyLnNwbGl0KCcmJyk7XHJcbiAgdmFyIG9iaiA9IHt9O1xyXG4gIGZvcih2YXIgaT0wO2k8cGF0aGFyci5sZW5ndGg7aSsrKXtcclxuICAgIHZhciBhcnIgPSBwYXRoYXJyW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICBvYmpbYXJyWzBdXSA9IGFyclsxXTtcclxuICAgIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgfVxyXG4gIHJldHVybiBwYXRocz9vYmpbcGF0aHNdOm9iajtcclxufVxyXG5tb2R1bGUuZXhwb3J0cy5nZXRwYXRoID0gZ2V0cGF0aDsiLCJ2YXIgZ2V0cCA9IHJlcXVpcmUoJy4vZ2V0cGF0aCcpO1xyXG5wID0gZ2V0cC5nZXRwYXRoKCdwcm9kdWN0aWQnKVxyXG4kKCcjdG90b3AnKVswXS5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcclxufVxyXG4kLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldHByb2R1Y3Q/cHJvZHVjdGlkPTEwJyxmdW5jdGlvbihkYXRhKXtcclxuICAkKCcueHh4JykuaHRtbCh0ZW1wbGF0ZSgnZ29vZGRldGFpbCcsZGF0YS5yZXN1bHQpKTtcclxuICB2YXIgY2F0ZWdvcnlJZCA9IGRhdGEucmVzdWx0WzBdLmNhdGVnb3J5SWQ7XHJcbiAgdmFyIHByb2R1Y3ROYW1lID0gZGF0YS5yZXN1bHRbMF0ucHJvZHVjdE5hbWU7XHJcbiAgJC5nZXQoJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRjYXRlZ29yeWJ5aWQ/Y2F0ZWdvcnlpZD0nK2NhdGVnb3J5SWQsZnVuY3Rpb24oZGF0YSl7XHJcbiAgICBkYXRhLnJlc3VsdC5jYXRlZ29yeUlkID0gY2F0ZWdvcnlJZDtcclxuICAgIHByb2R1Y3ROYW1lID0gICBwcm9kdWN0TmFtZS5yZXBsYWNlKC9cXHMrL2csXCJcIikuc3Vic3RyKDAsMjApO1xyXG4gICAgZGF0YS5yZXN1bHRbMF0ucHJvZHVjdE5hbWUgPSBwcm9kdWN0TmFtZS50cmltKCk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yeUlkLHByb2R1Y3ROYW1lLGRhdGEpO1xyXG4gICAgJCgnLm5hdicpLmh0bWwodGVtcGxhdGUoJ2dvb2RjYXRlJyxkYXRhLnJlc3VsdCkpXHJcbiAgfSlcclxufSlcclxuJC5nZXQoJ2h0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRwcm9kdWN0Y29tP3Byb2R1Y3RpZD05JyxmdW5jdGlvbihkYXRhKXtcclxuICAkKCcueXl5JykuaHRtbCh0ZW1wbGF0ZSgnY29tbWVudHRhaWwnLGRhdGEucmVzdWx0KSlcclxufSkiXX0=
