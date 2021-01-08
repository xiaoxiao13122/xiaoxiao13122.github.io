    function getCart(){
       var list = localStorage.getItem('cart')||"[]"
        return JSON.parse(list)
    }
    function setCart(arr){
        localStorage.setItem('cart',JSON.stringify(arr))
    }
    $('#cartin').click(function(){
        var  newProduct ={
            product_img:$('#cartin').data('img'),
            product_name:$('#cartin').data('name'),
            product_price:$('#cartin').data('price'),
            product_num:$('#cartin').data('num')
        };
        var productList =getCart();
        productList.push(newProduct);
        setCart(productList)
    })
