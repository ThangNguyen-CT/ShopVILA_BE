const express = require("express");

const {
    // applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus,
    // getAllOrders,
} = require('../controller/orderCtrl');

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

// router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/", createOrder);
router.get("/:m", getOrders);
router.get("/", getOrders);

router.put("/:id",updateOrderStatus);

module.exports= router;