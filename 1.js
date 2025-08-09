const tips = [
  "Always remove your makeup before bed.",
  "Stay hydrated to keep your skin glowing.",
  "Use sunscreen daily, even when indoors.",
  "Exfoliate twice a week to remove dead skin.",
  "Don’t touch your face often—it spreads bacteria!"
];

function showRandomTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById('daily-tip').textContent = tip;
}

function recommendProduct() {
  const type = document.getElementById('skinType').value;
  let product = "";

  switch (type) {
    case "dry":
      product = "Hydra Rich Cream by GlowLab";
      break;
    case "oily":
      product = "Oil-Free Moisturizer by Neutrogena";
      break;
    case "sensitive":
      product = "Soothing Aloe Cleanser by Cetaphil";
      break;
    case "combination":
      product = "Balance Toner by The Ordinary";
      break;
    default:
      product = "";
  }

  document.getElementById('product-result').textContent = product ? `Recommended: ${product}` : "";
}
