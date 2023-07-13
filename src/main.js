import { renderCoins } from './components';
import { fetchExchange } from './services/exchange';


import './style.css';
import './reset.style.css';


const buttonElement = document.querySelector('header form button');





buttonElement.addEventListener('click', () => {
  const inputElement = document.querySelector('header form input');
  const inputValue = inputElement.value;

  fetchExchange(inputValue)
    .then(exchange => {
      const rates = exchange.rates;
      const base = exchange.base;
      const ratesArray = Object.entries(rates);

      const ratesArrayToObejct = ratesArray.map(rateCoin => {

        const [name, value] = rateCoin;

        return {
          name: name,
          value: value,

        }
      })
      renderCoins(ratesArrayToObejct, base);
    })
})












