
export const updatecartValue = (localStorageitemArray) => {
    // Select ALL cart buttons (Desktop + Hamburger)
    const allCartButtons = document.querySelectorAll('#cart_btn');

    // Update every single cart button found on the page
    allCartButtons.forEach((button) => {
        button.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${localStorageitemArray.length}</i>`;
    });
}