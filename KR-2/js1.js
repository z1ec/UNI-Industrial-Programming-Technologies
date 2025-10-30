const items = document.querySelectorAll('.item');

document.querySelector('.item.active').classList.add('highlight');

let total = 0;
let maxPrice = 0;
let maxItem = '';
let pricesList = '';

items.forEach(item => {
    const price = +item.getAttribute('data-price');
    total += price;
    pricesList += `• ${item.textContent} - ${price}<br>`;
    
    if (price > maxPrice) {
        maxPrice = price;
        maxItem = item.textContent;
    }
});

document.getElementById('result').innerHTML = `
    - Цены товаров:<br>
    ${pricesList}<br>
    - Общая сумма: ${total}<br>
    - Максимальная цена: ${maxItem} - ${maxPrice}
`;

console.log('Общая сумма:', total);
console.log('Товар с максимальной ценой:', maxItem, maxPrice);