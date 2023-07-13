const ulElement = document.querySelector('.container main ul')
const h2Element = document.querySelector('.container main h2')


function createLiElement(name, value) {
  const lielement = document.createElement('li');

  lielement.innerHTML = `
  <b>${name}</b> 
  <span>${value}</span>`;
  return lielement;
}

export function renderCoins(coins, baseCoin) {
  ulElement.innerHTML = '';
  h2Element.innerHTML = `Valores referentes a 1 ${baseCoin}`;

  coins.forEach(coin => {
    const name = coin.name;
    const value = coin.value;

    const lielement = createLiElement(name, value);

    ulElement.appendChild(lielement);

  })
}
