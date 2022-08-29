const olFather = window.document.querySelector('ol.cart__items');

const productClean = async () => {
  const fullItem = await fetchProducts('computador');
  console.log(fullItem);
  return fullItem.results.reduce((productsList, e) => {
    const { id: sku, title: name, thumbnail: image, price } = e;
    productsList.push({ sku, name, image, price });
    return productsList;
  }, []);
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const loadingText = () => {
  const paragraph = window.document.createElement('p');
  paragraph.className = 'loading';
  paragraph.innerText = 'Carregando...';
  return paragraph;
};

const createProductItemElement = ({ sku, name, image, price }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(loadingText());
  setTimeout(() => {
    if (sku !== undefined && name !== undefined && image !== undefined) {
      section.innerHTML = '';
      section.appendChild(createCustomElement('span', 'item__sku', sku));
      section.appendChild(createCustomElement('span', 'item__title', name));
      section.appendChild(createProductImageElement(image));
      section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
      section.appendChild(createCustomElement('span', 'price-list', `R$ ${price.toFixed(2)}`))
    }
  }, 500);

  return section;
};

const printProduct = async () => {
  const sectionFather = window.document.querySelector('section.items');
  const produto = await productClean();
  produto.forEach((e) => sectionFather.appendChild(createProductItemElement(e)));
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

let sum = null;

const paragraph = window.document.createElement('p');
const sectionCart = window.document.querySelector('section.cart');
paragraph.className = 'total-price';
sectionCart.appendChild(paragraph);

const sumTotalAmount = async (idItem) => {
  const productFull = await fetchItem(idItem);
  sum += productFull.price;
  paragraph.innerHTML = `R$ ${Math.abs(sum.toFixed(2))}`;
};

const subTotalValue = async (idItem) => {
  const productFull = await fetchItem(idItem);
  sum -= productFull.price;
  paragraph.innerHTML = `R$ ${Math.abs(sum.toFixed(2))}`;
};

const cartItemClickListener = (event) => {
  let getId = null;
  getId = event.target.innerHTML;
  subTotalValue(getId.substring(5, 18));
  olFather.removeChild(event.target);
  saveCartItems(olFather.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getIdItem = async (idProduct) => {
  const productFull = await fetchItem(idProduct);
  const { id: sku, title: name, price: salePrice } = productFull;
  const keyNeeded = { sku, name, salePrice };
  sumTotalAmount(idProduct);
  olFather.appendChild(createCartItemElement(keyNeeded));
  saveCartItems(olFather.innerHTML);
};

const sectionBigDaddy = window.document.querySelector('section.items');
sectionBigDaddy.addEventListener('click', (e) => {
  let selectedItem = null;
  selectedItem = e.target;
  if (selectedItem.className.includes('item__add')) {
    getIdItem(selectedItem.parentElement.childNodes[0].innerHTML);
  }
});

const btnCart = window.document.querySelector('button.empty-cart');
btnCart.addEventListener('click', () => {
  olFather.innerHTML = '';
});

window.onload = () => {
  printProduct();
  olFather.innerHTML = getSavedCartItems();
  const itemList = window.document.querySelectorAll('li.cart__item');
  itemList.forEach((e) => e.addEventListener('click', cartItemClickListener));
};
