const fetchItem = async (id) => {
  if (!id) return new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/items/${id}`;
  const responseAPI = await fetch(url);
  const uniqueProduct = await responseAPI.json();
  return uniqueProduct;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
