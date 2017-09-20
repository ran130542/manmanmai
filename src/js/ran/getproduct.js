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