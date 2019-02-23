const render = function(productList){
    $('#content').empty();
    
    for (let i = 0; i < productList.length; i++){
      $('#content').append(`<div><h3>${productList[i].product_name}</h3><p>${productList[i].stock_quantity}</p>
      <p>${productList[i].price}</p><p>${productList[i].department_name}</p></div>`);
    }
  }
  
  const render33 = function(productList){
    for(var i = 0; i< productList.length; i++) {
        var temp = '<tr><td>' + productList[i].name + '</td>';
        temp+= '<td>' + productList[i].stock_quantity+ '</td>';
        temp+= '<td>' + productList[i].price + '</td>';
        temp+= '<td>' + productList[i].department_name + '</td></tr>';
        $('#tbody').append(temp);
    }
  }
  const getProduct = function(){
    console.log("is get product called");
    $.get('/api/Product')
    .then(function (data){
      console.log(data);
      render33(data);
      render(data);
    })
  }
  
  getProduct();
  
  
  const postProduct = function(event){
    event.preventDefault();
  
    console.log('clicked')
    // Save the input in an object called 'product'
    const product = {
        product_name: $('#product_name').val().trim(),
        stock_quantity: $('#stock_quantity').val().trim(),
        price: $('#price').val().trim(),
        department_name: $('#department_name').val().trim(),
        product_sales: $('#total').val().trim()
        
    }
  
    console.log('art', product)
    // POST the product object to /api/product
    $.post('/api/Product', product)
      .then(function(data) {
        // After receiving a response, call get product
        getProduct();
  
        // Blank our inputs after POST
       /* $('#product_name').val('');
        $('#stock_quantity').val('');// change id from html
        $('#price').val('');
        $('#department_name').val('');*/
        $('#total').val('');
        
      });
  
  }
  //$('#add_To_Cart').on('click', postProduct );
  //$('#btn btn-secondary').on('click', postProduct );
  