function applyPromoCode() {
    const promoCode = document.getElementById('promo-code').value;
    fetch('/apply-promo-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ promoCode: promoCode })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Promo code applied! Discount: ' + data.discount);
        document.getElementById('total').textContent = data.newTotal;
      } else {
        alert('Failed to apply promo code: ' + data.message);
      }
    })
    .catch(error => console.error('Error applying promo code:', error));
  }
  