const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const productRoter = require('./routers/productRoute');
const authRoter = require('./routers/authRoute.js');
const orderRouter = require('./routers/orderRoute');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(cookieParser());
dbConnect();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', authRoter);
app.use('/api/product', productRoter);
app.use("/api/order", orderRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
});