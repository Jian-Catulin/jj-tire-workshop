const shopName = "JJ Tire Workshop";
const currentYear = 2026;

let runningTotal = 0;

const floorJackPrice = 1800;
const compressorPrice = 3400;
const tireChangerPrice = 8200;

runningTotal = floorJackPrice + compressorPrice + tireChangerPrice;

console.log('Shop Name:', shopName);
console.log('Current Year:', currentYear);
console.log('Total Inventory Value:', runningTotal);

const titleElement = document.getElementById('shop-name');
if (titleElement) {
    titleElement.textContent = shopName;
}

const footerElement = document.getElementById('footer-copyright');
if (footerElement) {
    footerElement.textContent = "© " + currentYear + " " + shopName;
}

const statsElement = document.getElementById('computed-stats');
if (statsElement) {
    statsElement.textContent = "Total equipment value: ₱" + runningTotal;
}


const productStock = 5; 
let stockMessage;

if (productStock > 10) {
    stockMessage = "In stock";
} else if (productStock >= 1) { // Covers 1 to 10
    stockMessage = "Only a few left";
} else if (productStock === 0) { // Strict equality used
    stockMessage = "Sold out";
}

const stockDisplay = document.getElementById('jack-stock');
if (stockDisplay) {
    stockDisplay.textContent = "Status: " + stockMessage;
}


const orderTotal = 1800; 
const isMember = true;


const qualifiesForFreeDelivery = (orderTotal >= 1500 && isMember === true);


const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryDisplay = document.getElementById('delivery-check');
if (deliveryDisplay) {
    deliveryDisplay.textContent = "Order + Delivery: ₱" + finalTotal;
}


const isShopOpen = true;

const shopMessage = (isShopOpen === true) ? "Open today" : "Closed today";

const shopDisplay = document.getElementById('shop-status');
if (shopDisplay) {
    shopDisplay.textContent = shopMessage;
}