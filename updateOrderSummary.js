import { GetitemFromlocalStorage } from "./GetitemFromlocalStorage"

export const updateOrderSummary = () => {
    let localitems = GetitemFromlocalStorage();
    let Subtotal = localitems.reduce( (accum, current) => {
        return accum + current.price;
    }, 0);
    const Subtotalelement = document.querySelector('.sub_total');
    const totalelement = document.querySelector('.total_amount');
    const tax = 50;

    Subtotalelement.innerText = `₹ ${Subtotal}`;
    totalelement.innerText = `₹ ${Subtotal + 50}`;
}
