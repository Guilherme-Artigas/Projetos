require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem é uma função', () => {
    const typeFetchItem = fetchItem;
    expect.assertions(1);
    expect(typeof typeFetchItem).toBe(typeof fetchItem);
  });

  it('Verifica se fetchItem é chamada quando passado o valor MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect.assertions(1);
    expect(fetch).toBeCalled();
  });

  it('Verifica se fetch usa uma url específica', async () => {
    expect.assertions(1);
    const item = 'MLB1615760527';
    const url = `https://api.mercadolibre.com/items/${item}`;
    await fetchItem(url);
    expect(fetch).toBeCalledWith(url);
  });

  it('Verifica se fetchItem retorna um obejto igual a item', async () => {
    expect.assertions(1);
    const returnExpect = await fetchItem('MLB1615760527');
    expect(returnExpect).toEqual(item);
  });

  it('Verifica se fetchItem sem argumento retonra msg de erro', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
