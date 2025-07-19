  const qtyBtn = document.querySelectorAll('.qty-btn');
  const qtyDisplay = document.querySelector('.qty-number');
  const priceDisplay = document.querySelector('.price-Display');

  let quantity = 1;
  const unitPrice = 600.72;

  function updatePrice() {
    const totalPrice = unitPrice * quantity;
    priceDisplay.textContent = totalPrice.toFixed(2); // laba meelood kaddib dhibic
  }

  qtyBtn[0].addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      qtyDisplay.textContent = quantity;
      updatePrice();
    }
  });

  qtyBtn[1].addEventListener('click', () => {
    quantity++;
    qtyDisplay.textContent = quantity;
    updatePrice();
  });

  // Bilaabid: hubi in price sax yahay marka bogga la furo
  updatePrice();