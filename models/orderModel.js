const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        count: Number,
    }, ],
    paymentIntent: {
        type: String,
    },
    statusPayment: {
        type: String,
        default: "Chưa thanh toán"
    },
    orderStatus: {
        type: String,
        default: "Đang xử lý",
    },
    sex: {
        type: String,
        default: "Male",
    },
    address: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    e: {
        type: String,
        required: true,
    },
    m: {
        type: String,
        required: true,
    },
    des: {
        type: String
    },
    totalprice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});

//Export the model
module.exports = mongoose.model("Order", orderSchema);