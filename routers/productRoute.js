const express = require('express')
const router = express.Router();

const {
    createProduct,
    updateProduct,
    deleteProduct,
    getaProduct,
    getAllProduct,
    search
} = require('../controller/productCtrl');
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImages");
router.post("/",
    uploadPhoto,
    createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get('/search', search);
router.get('/:id', getaProduct);
router.get('/', getAllProduct);
module.exports = router;