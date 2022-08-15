require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    const tipo = fetchProducts;
    expect(typeof tipo).toBe(typeof fetchProducts);
  });

  it('Verificar se a função fetchProducts com o argumento "computador" chama fetch', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  it('Verificar se com o argumento "computador" a função fetch utiliza um determinado endpoint', async () => {
    expect.assertions(1);
    const item = 'computador';
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
    await fetchProducts(item);
    expect(fetch).toBeCalledWith(url);
  });

  it('Verificar se o retorno da função fetchProducts com o argumento "computador" é igual a computadorSearch', async () => {
    expect.assertions(1);
    const returnExpect = await fetchProducts('computador');
    expect(returnExpect).toEqual(computadorSearch);
  });

  it('Verificar se caso não receba argumento fetchProducts, deve retornar uma mensagem de erro', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('Produto não encontrado!'));
    }
  });
});
