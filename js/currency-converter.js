// document.querySelector('.exchange-rate .show-rate').addEventListener('click', );

//     async function convertValue(){
//     const currFrom = document.querySelector('.exchange-rate .curr-from').value;
//     const currTo = document.querySelector('.select-value').value;
//     const url = `https://v6.exchangerate-api.com/v6/f9c4374692627f323551d094/latest/${currFrom}`;
//     const response = await fetch(url);
//     const rates = await response.json();
//     const ratesInput = document.querySelector('.exchange-rate .rate');
//     ratesInput.value = rates.conversion_rates[currTo] ;
// }

class CurrencyService {
  constructor() {
      if (!CurrencyService._instance) CurrencyService._instance = this;
      return CurrencyService._instance;
  }
  async getCurrencies() {
      if (!this.currencies) {
        const url = `https://api.exchangerate-api.com/v4/latest/NOK`;
        this.currencies = await (await fetch(url)).json();
      }
      return this.currencies;
  }
  async getCurrencyRate(currency) {
      const currencies = await this.getCurrencies();
      return currencies.rates[currency];
  }
}