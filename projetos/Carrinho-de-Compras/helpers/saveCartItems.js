const saveCartItems = (valueHTML) => localStorage.setItem('cartItems', valueHTML);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
