//$(function() {

const render = function(items) {
  items.forEach(function(item) {
    $("#sale-items").append(buildRows(item));
  });
};

const getProduct = function() {
  $.get("/api/Product").then(render);
};

getProduct();

const buildRows = function(item) {
  const tr = $("<tr>");

  const input = $(`<input>`).attr({
    type: Number,
    min: 0,
    id: item.id

  });
  
  const quantity = $(`#${item.id}`).val();
  console.log($(`#${item.id}`));
  console.log(quantity);
  console.log(item.id);
  let totalPrice = quantity * item.price;

  tr.append(
    $("<form>"),
    $("<td>").append(input),
    $("<td>").text(item.product_name),
    $("<td>").text(item.department_name),
    $("<td>").text(item.price),
    $("<td>").text(item.stock_quantity),
    $("<td>").text(totalPrice),
    $('<input id="updatePrice" type = "submit" value="update"></input>'),
    $("<td>").text(" "),
    $('<input id="addToCart" type = "submit" value="Add to Cart"></input>'),
    $("</form>")
  );
  return tr;
};

function updatePrice(item) {
  let quantity = document.getElementById(item.id).value;
  let totalPrice = parseInt(quantity) * parseFloat(item.price);
  console.log(totalPrice);
  $("#editbox2").append(totalPrice);
}
// updatePrice()//calculate();

function addToCart() {
  console.log("adding to cart");
}

//calculatee();

//POST the product object to /api/product
// $.post("/api/Product", product)
//    .then(function(data) {
//     res.json(data);
//   })
//   .catch(function (err) {
//     res.json(err);
//   });
// After receiving a response, call get product
//

/*function validateForm() {
    var x = item.stock_quantity;
    if (x < editbox1) {
      alert("Insufficient quantity!");
      return false;
    }
  }
  validateForm();*/
//});

$("#shop").on("click", addToCart);
$("#updatePrice").on("click", updatePrice);
