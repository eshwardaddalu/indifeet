
export const cartdetails = JSON.parse(localStorage.getItem('cartdetails')) || [];
export const updateCart = (product) => {
  const length = Object.keys(product).length;
  if (length>1) {
    cartdetails.push(product);
    console.log('Updating cart with product:', product);
    localStorage.setItem('cartdetails', JSON.stringify(cartdetails));
  }
};
export default  updateCart ;
