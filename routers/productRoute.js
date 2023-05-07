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
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
router.post("/",
    uploadPhoto,
    authMiddleware, isAdmin,
    createProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get('/search', search);
router.get('/:id', getaProduct);
router.get('/', getAllProduct);
module.exports = router;