export const changeAddtocartbuttonvalue = (event, id, stock) =>{

    const currentcard = document.querySelector(`#card${id}`);
    console.log(currentcard);

    const quantityelement = currentcard.querySelector('.btn_value');
    let quantity = parseInt(quantityelement.innerText);

    if (event.target.classList.contains("Increament_btn")) {
        if (quantity < stock) {
        quantity += 1;
        } else if (quantity === stock) {
        quantity = stock;
        }
    }
    if (event.target.classList.contains("Decreament_btn")) {
        if (quantity > 0) {
        quantity -= 1;
        }
    }

    quantityelement.innerText = quantity;
    console.log(quantity);
}