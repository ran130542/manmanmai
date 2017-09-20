$.get('http://139.199.192.48:9090/api/getcategorytitle', function(data) {
    console.log(data)
    $('#duct').append(template('getproducttext', data.result));

    $(document).on('click', function() {

        $('#list').fadeToggle(1000);
        console.log($('list'))
        $.get('http://139.199.192.48:9090/api/getcategory?titleid=1', function(data) {
            console.log(data)
            $('#list').append(template('duct-list', data.result))
        })
    })
});