import { GetitemFromlocalStorage } from "./GetitemFromlocalStorage"
import { updatecartValue } from "./upadatecartValue";
import { updateOrderSummary } from "./updateOrderSummary";

export const removeTtemFromcart = (id) =>{
    let localitems = GetitemFromlocalStorage();
    localitems= localitems.filter((current) => current.id != id);
    localStorage.setItem('ProductLS', JSON.stringify(localitems));

    let removediv = document.getElementById(`card${id}`);
    if(removediv){
        removediv.remove();
    }

    updatecartValue(localitems);
    updateOrderSummary();
}