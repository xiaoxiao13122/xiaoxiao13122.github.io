
    //加入购物车
     //    商品Id	商品名称	单价	数量	小计	操作

        //  1 购物车页面一打开就要展示该用户的购物车商品列表
         function getCart(){
            var list = localStorage.getItem('cart')||"[]"; //字符串
            return JSON.parse(list);
        }
        function setCart(arr){
            localStorage.setItem('cart',JSON.stringify(arr))
        }
		$('.btn').click(function(){
			var  newProduct ={
				product_img:$('.btn').data('img'),
				product_name:$('.btn').data('name'),
				product_price:$('.btn').data('price'),
				product_num:$('.btn').data('num')
			};
			var cartList =getCart();
			cartList.push(newProduct);
			setCart(cartList)
		})


        showList()
        function showList(){
            var productList = getCart();
			var cartList =getCart();
            // $('tbody').empty();
                if(productList.length<1){
                    $('tbody').hide();
                    $('h2').show();
                }else{
                    $('table').show();
                    $('h2').hide();
                    var num=0;
                for (var i = 0; i < productList.length; i++) {
                    var product = productList[i];
                  
                $(  `<tr>
                            <td><input type="checkbox" class="checked"></td>
                            <td><a href="./produce.html"><img style="width: 80px;height: 80px;" src="${product.product_img}" alt=""></a></td>
                            <td>${product.product_name}</td>
                            <td>
                            <div>
                            <a class="les">-</a>
                            <input type="text" value="${product.product_num}">
                            <a class="add">+</a>
                            </div>
                            </td>
                            <td><i class="small">${product.product_price}</i>元</td>
                            <td><i class="small">${product.product_price}</i>元</td>
                            <td class="deletemsg">x</td>
                        </tr>`).appendTo($('.shopcart table tbody'))
			}
          
	$('.heji').html(num)
	$('.add').click(function () {
		var spName = $(this).parents('tr').children().eq(2).html();
		console.log(spName)
		productList.forEach(function (item) {
			if (item.product_name == spName) {
				item.product_num = item.product_num / 1 + 1;
				return;
			}
		})
		setCart(productList);
		location.href = '';
	})
	$('.les').click(function () {
		var spName = $(this).parents('tr').children().eq(2).html();
		productList.forEach(function (item) {
			if (item.product_name == spName) {
				item.product_num = item.product_num / 1 - 1;
				if (item.product_num <= 0) {
					item.product_num = 0;
				}
				return;
			}
		})
		setCart(productList);
		location.href = '';
	})
	$('.deletemsg').click(function () {
		var spName = $(this).parents('tr').children().eq(2).html();
		productList.forEach(function (item) {
			if (item.product_name == spName) {
				var newarr = productList.indexOf(item);
				productList.splice(newarr, 1);
				return;
			}
		})
		setCart(productList);
		location.href = '';
	})
	$('.fuqian').click(function () {
		if (localStorage.getItem('status')) {
			alert('点击确认即可完成结算');
		} else {
			var con = confirm('您还没有登录哦，请点击确定前往登录页面');
			if (con == true) {
				location.href = './login.html'
			} else {
				return;
			}
		}
	})
}
}
