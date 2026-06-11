async function trackOrder() {

    const orderId =
    document.getElementById("orderId").value;

    if (!orderId) {

        alert("Enter Order ID");

        return;

    }

    try {

        const response = await fetch(
            `http://localhost:5000/api/orders/${orderId}`
        );

        const order = await response.json();

        if (!response.ok) {

            document.getElementById(
                "trackingResult"
            ).innerHTML = `
                <p>Order Not Found</p>
            `;

            return;
        }

        document.getElementById(
            "trackingResult"
        ).innerHTML = `

            <h3>Order Details</h3>

            <p>
                <strong>Order ID:</strong>
                ${order.orderId}
            </p>

            <p>
                <strong>Service:</strong>
                ${order.service}
            </p>

            <p>
                <strong>Status:</strong>
                ${order.status}
            </p>

            <p>
                <strong>Pickup Date:</strong>
                ${order.pickupDate}
            </p>

            <p>
                <strong>Address:</strong>
                ${order.address}
            </p>

        `;

    } catch (error) {

        console.error(error);

        document.getElementById(
            "trackingResult"
        ).innerHTML = `
            <p>Server Error</p>
        `;

    }

}