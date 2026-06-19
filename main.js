import './style.css'
import products from '../api/product.json';
import { changeAddtocartbuttonvalue } from './changeAddtocartbuttonvalue';
import { addtocardFunction } from './addtocardFunction';
import { GetitemFromlocalStorage } from './GetitemFromlocalStorage';
import { updatecartValue } from './upadatecartValue';
console.log(products);
const card_container = document.querySelector('.home_product_card');

GetitemFromlocalStorage();

if(card_container){
products.forEach((current) => {
    console.log(current);
    const card_product = document.createElement('div');
    card_product.classList.add('product_card');
    card_product.id = `card${current.id}`;
    card_product.innerHTML=
       `<img class="product_card_image" src="${current.image}" alt="${current.name}">
        <h1>${current.name}</h1>
        <div class="star">
        <i class="fa-duotone fa-solid fa-star"></i>
        <i class="fa-duotone fa-solid fa-star"></i>
        <i class="fa-duotone fa-solid fa-star"></i>
        <i class="fa-duotone fa-solid fa-star"></i>
        <i class="fa-duotone fa-solid fa-star"></i>
        </div>
        <p class="product_card_description">${current.description}</p>
        <div class="product_price_element">
        <p class="price">₹${current.price}</p>
        <p class="actual_price">₹${current.price*1.2}</p>
        </div>
        <p class="stock"> Total Stock Available: ${current.stock}</p>
        <div class="quantity_div">
        <p class="quantity_para">Quantity(Pieces)</p>
        <div class="quantity_btn">
        <button class=" btn_p Increament_btn">+</button>
        <p class="btn_p btn_value">0</p>
        <button class="btn_p Decreament_btn">-</button>
        </div>
        </div>
        <a class="cartbutton" href="#"><i class="add_to_cart_p fa-solid fa-cart-shopping"> Add to Cart</i></a>`;
        card_container.appendChild(card_product);
        console.log(card_product);

        card_product.querySelector('.quantity_div').addEventListener('click', (event) => {
            console.log("click");
            changeAddtocartbuttonvalue(event, current.id,current.stock);
        })

        card_product.querySelector('.add_to_cart_p').addEventListener('click', (event) =>{
            event.preventDefault();
            addtocardFunction(event, current.id, current.stock);
        })
});
}
  
const hamburgerBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger_value");
const closeBtn = document.querySelector(".hamburger_nav");

hamburgerBtn.addEventListener("click", () => {
  menu.classList.add("active");
  hamburgerBtn.classList.add("hide");   //hide button
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  hamburgerBtn.classList.remove("hide"); //show button
});

