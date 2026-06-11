const service =
document.getElementById("service");

const quantity =
document.getElementById("quantity");

const totalPrice =
document.getElementById("totalPrice");

function calculatePrice(){

    const servicePrice =
    Number(service.value);

    const qty =
    Number(quantity.value);

    totalPrice.innerText =
    "₹" + (servicePrice * qty);

}

service.addEventListener(
    "change",
    calculatePrice
);

quantity.addEventListener(
    "input",
    calculatePrice
);

calculatePrice();