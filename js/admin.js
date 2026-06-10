async function loadOrders() {

    try {

        const response =
        await fetch("http://localhost:5000/api/orders");

        const orders =
        await response.json();

        let html = "";

        let pendingCount = 0;
        let deliveredCount = 0;

        orders.forEach(order => {

            if(order.status === "Pending")
                pendingCount++;

            if(order.status === "Delivered")
                deliveredCount++;

            html += `

            <tr>

                <td>${order.orderId}</td>

                <td>${order.customer}</td>

                <td>${order.service}</td>

                <td>${order.address}</td>

                <td>${order.pickupDate}</td>

                <td>

                    <select
                        onchange="updateStatus(
                        '${order.orderId}',
                        this.value
                        )"
                    >

                        <option ${order.status === "Pending" ? "selected" : ""}>
                            Pending
                        </option>

                        <option ${order.status === "Picked Up" ? "selected" : ""}>
                            Picked Up
                        </option>

                        <option ${order.status === "Washing" ? "selected" : ""}>
                            Washing
                        </option>

                        <option ${order.status === "Drying" ? "selected" : ""}>
                            Drying
                        </option>

                        <option ${order.status === "Ironing" ? "selected" : ""}>
                            Ironing
                        </option>

                        <option ${order.status === "Delivered" ? "selected" : ""}>
                            Delivered
                        </option>

                    </select>

                </td>

            </tr>

            `;

        });

        document.getElementById(
            "ordersTableBody"
        ).innerHTML = html;

        document.getElementById(
            "totalOrders"
        ).innerText = orders.length;

        document.getElementById(
            "pendingOrders"
        ).innerText = pendingCount;

        document.getElementById(
            "deliveredOrders"
        ).innerText = deliveredCount;

    }

    catch(error) {

        console.log(error);

    }

}

async function updateStatus(
    orderId,
    status
) {

    try {

        await fetch(
            `http://localhost:5000/api/orders/${orderId}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({
                    status
                })
            }
        );

        alert("Status Updated");

        loadOrders();

    }

    catch(error) {

        console.log(error);

    }

}

loadOrders();