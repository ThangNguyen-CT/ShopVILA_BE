const express = require("express");

const {
    // applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus,
    getAllOrders,
    getOrdersId
} = require('../controller/orderCtrl');

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

// router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/", createOrder);
router.get("/find/:id", getOrdersId);
router.get("/:m", getOrders);
router.get("/", getAllOrders);

router.put("/:id", updateOrderStatus);

module.exports = router;