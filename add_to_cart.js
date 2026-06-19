//add to cart js of troli

import products from '../api/product.json';
import { Changequantityofcartitem } from './Changequantityofcartitem';
import { removeTtemFromcart } from './removeTtemFromcart';
import { GetitemFromlocalStorage } from './GetitemFromlocalStorage';
import { updatecartValue } from './upadatecartValue';
import { updateOrderSummary } from './updateOrderSummary';
const CartContainer = document.querySelector('.addcartmainContiner');



let localStorageitem = GetitemFromlocalStorage();
updatecartValue(localStorageitem);
updateOrderSummary();


let product_image;
let product_name;

localStorageitem.forEach( (item) => {

    products.filter((current) => {
        if(current.id === item.id){
            product_image = current.image;
            product_name =current.name;
        }
    });

    console.log(item);
    const cart_card = document.createElement('div');
    cart_card.classList.add('cart_card_container');
    cart_card.id = `card${item.id}`;
    cart_card.innerHTML= `
    <div class="image_name">
        <img class="cart_item_image" src="${product_image}" alt="productImage">
        <h3 class="cart_product_name">${product_name}</h3>
    </div>

    <div class="cart_product_price">₹ ${item.price}</div>
    
    <div class="all_cart_btn">
        <div class="cart_btn">
            <button class="cart_btn_operation Inc_btn">+</button>
            <p class="cart_btn_operation product_quantity">${item.quantity}</p>
            <button class="cart_btn_operation Dec_btn">-</button>
        </div>
        <button class="remove_btn">Remove</button>
    </div>`;
    CartContainer.appendChild(cart_card);

    cart_card.querySelector('.cart_btn').addEventListener('click', (event) => {
            Changequantityofcartitem(event, item.id, item.price);
    });

    cart_card.querySelector('.remove_btn').addEventListener('click', () => {
        removeTtemFromcart(item.id);
    })

});
