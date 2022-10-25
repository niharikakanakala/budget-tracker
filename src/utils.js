export function currencyFormat(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
  }
  
  export function percentFormat(number) {
    if (number <= 0) return '---';
  
    return Number(number).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 0,
    });
  }
  
 
  export function sum(array) {
    return array.reduce((a, b) => a + b, 0);
  }