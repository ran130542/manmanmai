(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var arr = [];
$.get('http://139.199.192.48:9090/api/getmoneyctrl?pageid=1', function (data) {
  dataarr(data);
  $('.cont>ul').html(template('firstpage', data.result));
  $('select').html(template('fenye', data));
})

/*点击下拉列表渲染数据*/
$('select')[0].onchange = function () {
  var val = $(this).val();
  $.ajax({
    url: "http://139.199.192.48:9090/api/getmoneyctrl?pageid=" + val,
    success: function (data) {
      data.totalpage = arr;
      $('.cont>ul').html(template('firstpage', data.result))
    }
  })
}
/*点击上一页*/
$('#pre').on('click', function () {
  var val = $('select').val();
  if (val == 1) {
    val = 1;
  } else {
    val = val - 1;
  }
  $('select').val(val);
  changpage(val);
})
/*点击下一页*/
$('#next').on('click', function () {
  var val = $('select').val() - 0;
  if (val < arr.length) {
    val = val + 1;
  } else {
    val = arr.length;
  }
  $('select').val(val);
  changpage(val);
})
function changpage(val) {
  $.ajax({
    url: "http://139.199.192.48:9090/api/getmoneyctrl?pageid=" + val,
    success: function (data) {
      data.totalpage = arr;
      $('.cont>ul').html(template('firstpage', data.result))
      data.sele = val - 1;
      $('select').html(template('fenye', data));
    }
  })
}
function dataarr(data) {
  var len = Math.ceil(data.totalCount / data.pagesize);
  for (var i = 0; i < len; i++) {
    arr[i] = i;
  }
  data.totalpage = arr;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvcmFuL2dldG1vbmV5Y3RybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGFyciA9IFtdO1xyXG4kLmdldCgnaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldG1vbmV5Y3RybD9wYWdlaWQ9MScsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgZGF0YWFycihkYXRhKTtcclxuICAkKCcuY29udD51bCcpLmh0bWwodGVtcGxhdGUoJ2ZpcnN0cGFnZScsIGRhdGEucmVzdWx0KSk7XHJcbiAgJCgnc2VsZWN0JykuaHRtbCh0ZW1wbGF0ZSgnZmVueWUnLCBkYXRhKSk7XHJcbn0pXHJcblxyXG4vKueCueWHu+S4i+aLieWIl+ihqOa4suafk+aVsOaNriovXHJcbiQoJ3NlbGVjdCcpWzBdLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB1cmw6IFwiaHR0cDovLzEzOS4xOTkuMTkyLjQ4OjkwOTAvYXBpL2dldG1vbmV5Y3RybD9wYWdlaWQ9XCIgKyB2YWwsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICBkYXRhLnRvdGFscGFnZSA9IGFycjtcclxuICAgICAgJCgnLmNvbnQ+dWwnKS5odG1sKHRlbXBsYXRlKCdmaXJzdHBhZ2UnLCBkYXRhLnJlc3VsdCkpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vKueCueWHu+S4iuS4gOmhtSovXHJcbiQoJyNwcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHZhbCA9ICQoJ3NlbGVjdCcpLnZhbCgpO1xyXG4gIGlmICh2YWwgPT0gMSkge1xyXG4gICAgdmFsID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFsID0gdmFsIC0gMTtcclxuICB9XHJcbiAgJCgnc2VsZWN0JykudmFsKHZhbCk7XHJcbiAgY2hhbmdwYWdlKHZhbCk7XHJcbn0pXHJcbi8q54K55Ye75LiL5LiA6aG1Ki9cclxuJCgnI25leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHZhbCA9ICQoJ3NlbGVjdCcpLnZhbCgpIC0gMDtcclxuICBpZiAodmFsIDwgYXJyLmxlbmd0aCkge1xyXG4gICAgdmFsID0gdmFsICsgMTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFsID0gYXJyLmxlbmd0aDtcclxuICB9XHJcbiAgJCgnc2VsZWN0JykudmFsKHZhbCk7XHJcbiAgY2hhbmdwYWdlKHZhbCk7XHJcbn0pXHJcbmZ1bmN0aW9uIGNoYW5ncGFnZSh2YWwpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBcImh0dHA6Ly8xMzkuMTk5LjE5Mi40ODo5MDkwL2FwaS9nZXRtb25leWN0cmw/cGFnZWlkPVwiICsgdmFsLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgZGF0YS50b3RhbHBhZ2UgPSBhcnI7XHJcbiAgICAgICQoJy5jb250PnVsJykuaHRtbCh0ZW1wbGF0ZSgnZmlyc3RwYWdlJywgZGF0YS5yZXN1bHQpKVxyXG4gICAgICBkYXRhLnNlbGUgPSB2YWwgLSAxO1xyXG4gICAgICAkKCdzZWxlY3QnKS5odG1sKHRlbXBsYXRlKCdmZW55ZScsIGRhdGEpKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcbmZ1bmN0aW9uIGRhdGFhcnIoZGF0YSkge1xyXG4gIHZhciBsZW4gPSBNYXRoLmNlaWwoZGF0YS50b3RhbENvdW50IC8gZGF0YS5wYWdlc2l6ZSk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgYXJyW2ldID0gaTtcclxuICB9XHJcbiAgZGF0YS50b3RhbHBhZ2UgPSBhcnI7XHJcbn1cclxuIl19
