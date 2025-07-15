const qtyBtn = document.querySelectorAll('.qty-btn');
  const qtyDisplay = document.querySelector('.qty-number');

  let quantity = 1;

  qtyBtn[0].addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      qtyDisplay.textContent = quantity;
    }
  });

 
  qtyBtn[1].addEventListener('click', () => {
    quantity++;
    qtyDisplay.textContent = quantity;

    })