document.addEventListener('DOMContentLoaded', () => {
    const unitOptions = document.querySelectorAll('.unit-option');
    const totalPrice = document.getElementById('total-price');
    const addToCartBtn = document.getElementById('add-to-cart');
    const cartMessage = document.getElementById('cart-message');
  
    let selectedUnit = 1;
  

    unitOptions.forEach(option => {
      option.addEventListener('click', () => {

        unitOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
  
        const hiddenOptions = option.querySelector('.unit-options-hidden');
        if (hiddenOptions) {
          document.querySelectorAll('.unit-options-hidden').forEach(el => el.style.display = 'none');
          hiddenOptions.style.display = 'block';
        } else {
          document.querySelectorAll('.unit-options-hidden').forEach(el => el.style.display = 'none');
        }
  
        const price = option.querySelector('.price').innerText;
        totalPrice.innerText = price;
  
    
        selectedUnit = option.dataset.units;
      });
    });
    addToCartBtn.addEventListener('click', () => {
      const sizes = [];
      const colors = [];
      let validSelection = true;
  
      if (selectedUnit === '1') {
        sizes.push(document.getElementById('size-1').value);
        colors.push(document.getElementById('color-1').value);
      } else if (selectedUnit === '2') {
        sizes.push(document.getElementById('size-2a').value);
        sizes.push(document.getElementById('size-2b').value);
        colors.push(document.getElementById('color-2a').value);
        colors.push(document.getElementById('color-2b').value);
      } else if (selectedUnit === '3') {
        sizes.push(document.getElementById('size-3').value);
        colors.push(document.getElementById('color-3').value);
      }
  
      
      sizes.forEach((size, index) => {
        if (size === '' || colors[index] === '') {
          validSelection = false;
        }
      });
  

      if (validSelection) {
        const cartDetails = {
          unit: selectedUnit,
          sizes: sizes,
          colors: colors,
          totalPrice: totalPrice.innerText
        };
        
        // Show cart message
        cartMessage.innerText = `Added to Cart: ${selectedUnit} Unit(s) - Total: ${totalPrice.innerText}`;
        cartMessage.style.color = 'green';
        console.log("Cart Details:", cartDetails); 
  
      } else {
        cartMessage.innerText = 'Please select sizes and colors for all items!';
        cartMessage.style.color = 'red';
      }
    });
  });
  