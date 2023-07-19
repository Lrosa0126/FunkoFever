
const cart = {
    cartItems: [],
    total: 0,
  };
  
 
  function updateCart() {
    
    const cartElement = document.querySelector('.cart');
    
    const template = Handlebars.compile(document.getElementById('cart-template').innerHTML);
   
    const html = template(cart);

    cartElement.innerHTML = html;
  }
  
  
  function addItemToCart(itemId) {
    
    const item = funkoData.find(i => i.id === itemId);
    if (item) {
      
      const existingItem = cart.cartItems.find(i => i.id === itemId);
      if (existingItem) {
        
        existingItem.quantity += 1;
      } else {
        
        cart.cartItems.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        });
      }
      cart.total += parseFloat(item.price);
    
      updateCart();
    }
  }
  

  function getCartData() {

    return cart;
  }
  

  module.exports = {
    updateCart,
    addItemToCart,
    getCartData,
  };
  