let card = document.querySelector('.container');

fetch('https://betafullstack.pythonanywhere.com/products')
  .then((response) => {
    if (!response.ok) {
      console.log('Network response was not ok');
    }else{
      return response.json();
    }
  })
  .then((data) => {

    data.forEach(element => {
        console.log(element.product_name);

        card.innerHTML +=`
        <section class='card'>
        <div class='part'>
        <h1>${element.product_name}</h1>
        </div>
        <div class='part2' style='border-bottom: 1px solid rgba(0, 0, 0, 0.401); border-top: 1px solid rgba(0, 0, 0, 0.401);'>
        <img src='${element.product_img}'>
        </div>
        <div class='part3'>
        <div class="title"><h1>$${element.product_price}</h1></div>
        <div class="button"><button>Add to Cart</button></div>
        </div>
        </section>`

    })


})
  .catch(error => {
    console.log(`There was a problem with the fetch operation: ${error}`);
  });


