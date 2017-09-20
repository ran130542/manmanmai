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
