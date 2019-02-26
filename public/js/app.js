$(function() {

  const render = function(items) {
    items.forEach(function(item) {
      $("#sale-items").append(buildRows(item));
    })
  };

  const getProduct = function() {
    $.get("/api/Product").then(render);
  };

  getProduct();

  const buildRows = function(item) {
    const tr = $("<tr>")

    tr.append(
      $('<input id="editbox1"  size="5" type="text">'),
      $('<td>').text(item.product_name),
      $('<td>').text(item.department_name),
      $('<td>').text(item.price),
      $('<td>').text(item.stock_quantity),
      $('<input id="editbox2"  size="8" type="text">')

            
    )
    return tr
  };
 function calculate(){
 // let editbox = document.getElementById("editbox1").value;
 let input = editbox1;
  let price = item.price;
  let multiply = input * parseFloat(price);
  console.log(multiply);
 }
 $('#shop').on('click', calculate );
 

  
  // POST the product object to /api/product
   $.post("/api/Product", product)
   .then(function(data) {
    res.json(data);
  })
  .catch(function (err) {
    res.json(err);
  });
  // After receiving a response, call get product
  getProduct();

  function validateForm() {
    var x = item.stock_quantity;
    if (x < editbox1) {
      alert("Insufficient quantity!");
      return false;
    }
  }
  validateForm();
});
