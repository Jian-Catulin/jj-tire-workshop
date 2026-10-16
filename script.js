
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