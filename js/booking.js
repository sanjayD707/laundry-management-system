const bookingForm =
document.getElementById("bookingForm");

bookingForm.addEventListener(
"submit",
async (e)=>{

    e.preventDefault();

    const data = {

        customer:
        localStorage.getItem("userId"),

        service:
        document.getElementById("service").value,

        address:
        document.getElementById("address").value,

        pickupDate:
        document.getElementById("pickupDate").value

    };

    const response =
    await fetch(
    "http://localhost:5000/api/orders/create",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

    const result =
    await response.json();

    document.getElementById("message")
    .innerHTML =
    `Order Created: ${result.order.orderId}`;

});