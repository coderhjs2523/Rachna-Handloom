import { updatecartValue } from "./upadatecartValue";

export const GetitemFromlocalStorage =() => {
    let products = localStorage.getItem('ProductLS');
    if(!products){
        return [];
    }
    products = JSON.parse(products);
    updatecartValue(products);
    return products;
}