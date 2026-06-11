const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

router.get("/test", (req, res) => {
    res.send("Order Route Working");
});

router.post("/create", async (req, res) => {

    try {

        const {
            customer,
            service,
            address,
            pickupDate
        } = req.body;

        const order = await Order.create({
            orderId: "ORD" + Date.now(),
            customer,
            service,
            address,
            pickupDate
        });

        res.status(201).json({
            message: "Order Created Successfully",
            order
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});
router.get("/:orderId", async (req, res) => {

    try {

        const order = await Order.findOne({
            orderId: req.params.orderId
        });

        if (!order) {
            return res.status(404).json({
                message: "Order Not Found"
            });
        }

        res.json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.put("/:orderId", async (req, res) => {

    try {

        const { status } = req.body;

        const order = await Order.findOneAndUpdate(
            {
                orderId: req.params.orderId
            },
            {
                status
            },
            {
                new: true
            }
        );

        if (!order) {
            return res.status(404).json({
                message: "Order Not Found"
            });
        }

        res.json({
            message: "Status Updated Successfully",
            order
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});
router.get("/", async (req, res) => {

    try {

        const orders = await Order.find()
            .sort({ createdAt: -1 });

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});
router.get("/customer/:customerId", async (req, res) => {

    try {

        const orders = await Order.find({
            customer: req.params.customerId
        });

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;