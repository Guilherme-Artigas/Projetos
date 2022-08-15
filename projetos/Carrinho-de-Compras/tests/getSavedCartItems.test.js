const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verificar se ao executar getSavedCartItems localStorage.getItem é chamado', async () => {
    expect.assertions(2);
    await getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});
