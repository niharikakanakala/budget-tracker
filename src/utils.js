export const currencyFormat = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
  }
  
  export const percentFormat = (number) => {
    if (number <= 0) return '---';
  
    return Number(number).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 0,
    });
  }
  
 
  export const sum = () => {
    //Implement the sum function so that it calculates the monthly income and expenditure.
  }