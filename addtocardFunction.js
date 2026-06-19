import { GetitemFromlocalStorage } from "./GetitemFromlocalStorage";
import { updatecartValue } from "./upadatecartValue";

export const addtocardFunction = (event, id, stock) => {

    let localStorageitemArray = GetitemFromlocalStorage();
    // console.log(localStorageitemArray);

    const currentcard = document.querySelector(`#card${id}`);
    const productprice = currentcard.querySelector('.price').innerText;
    const productQuantity = currentcard.querySelector('.btn_value').innerText;
    // console.log(productprice,productQuantity);

    // check the existing product in local storage to update only quantity and price
    let existingProduct = localStorageitemArray.find(
        (item) => Number(item.id) === Number(id)
        );


    let price = Number(productprice.replace('₹',''));
    let quantity = Number(productQuantity);
    // console.log(price);
   

    if(existingProduct && quantity > 1){
        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = quantity * price;
        // console.log(quantity);
        // console.log(price);

        let updatedcart ={ id, quantity, price };
        updatedcart = localStorageitemArray.map( (current) => {
           return (current.id === id)? updatedcart : current;
        });
        localStorage.setItem('ProductLS', JSON.stringify(updatedcart));
    }
    
    if(existingProduct){
        return false;
    }
    
    price = price * quantity;
    //Add product to local storage
    localStorageitemArray.push({id, quantity, price});
    localStorage.setItem('ProductLS', JSON.stringify(localStorageitemArray));

    //update the nav bar cart value
    updatecartValue(localStorageitemArray);
}

