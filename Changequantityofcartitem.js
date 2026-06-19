
import { GetitemFromlocalStorage } from "./GetitemFromlocalStorage";
import { updatecartValue } from "./upadatecartValue";
import { updateOrderSummary } from "./updateOrderSummary";

export const Changequantityofcartitem = (event, id, price) => {
    const cardElement = document.querySelector(`#card${id}`);
    const quantityElement = cardElement.querySelector('.product_quantity');
    const priceElement = cardElement.querySelector('.cart_product_price');

    let localProducts = GetitemFromlocalStorage();
    
    // Find the item in local storage
    let existingProduct = localProducts.find((item) => item.id === id);
    if (!existingProduct) return;

    // Update the quantity
    if (event.target.classList.contains("Inc_btn")) {
        existingProduct.quantity += 1;
    } else if (event.target.classList.contains("Dec_btn")) {
        if (existingProduct.quantity > 1) {
            existingProduct.quantity -= 1;
        }
    }

    // Update the price (Base Price * New Quantity)
    // No .toFixed() since you want whole numbers
    existingProduct.price = existingProduct.quantity * price;

    // 1. Sync Local Storage
    localStorage.setItem('ProductLS', JSON.stringify(localProducts));

    // 2. Sync UI (The labels on the card)
    quantityElement.innerText = existingProduct.quantity;
    priceElement.innerText = `₹ ${existingProduct.price}`;

    // 3. Sync Summary Box and Nav Icon
    updatecartValue(localProducts);
    updateOrderSummary(); 
}