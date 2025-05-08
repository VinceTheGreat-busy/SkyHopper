const cart = {};

function addToCart(name, price) {
    if (cart[name]) {
        cart[name].quantity += 1;
        cart[name].totalPrice += price;
    } else {
        cart[name] = {
            quantity: 1,
            totalPrice: price
        };
    }
}
updateCartDisplay();

function updateCartDisplay() {
    const cartDisplay = document.getElementById('cartItems');
    cartDisplay.innerHTML = '';

    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.innerText = `${product} - Quantity: ${cart[product].quantity} - Total Price: Rs${cart[product].totalPrice.toFixed(2)}`;
        cartList.appendChild(listItem);
    }
}