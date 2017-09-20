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