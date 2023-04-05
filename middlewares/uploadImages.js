const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'my-folder', // Tên thư mục trên Cloudinary để lưu trữ hình ảnh
        format: async(req, file) => 'jpeg', // Định dạng file sau khi xử lý
        public_id: (req, file) => Date.now() + '-' + file.originalname // Tên file trên Cloudinary
    }
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) { // Bắt đầu từ 'image' chứ không phải 'images'
        cb(null, true);
    } else {
        cb({ message: "Unsupported file format" }, false);
    }
};

const uploadPhoto = multer({
    storage: storage,
    fileFilter: multerFilter,
    limits: { fileSize: 1000000 },
}).array('images', 4); // Thay vì sử dụng .single() để upload 1 file, ta sử dụng .array() để upload nhiều file cùng lúc

const productImgResize = async(req, res, next) => {
    if (!req.files) return next();
    await Promise.all(
        req.files.map(async(file) => {
            await sharp(file.path)
                .resize(300, 300)
                .toFormat("jpeg")
                .jpeg({ quality: 90 })
                .toFile(`public/images/products/${file.filename}`);
            fs.unlinkSync(file.path);
        })
    );
    next();
};

const blogImgResize = async(req, res, next) => {
    if (!req.files) return next();
    await Promise.all(
        req.files.map(async(file) => {
            await sharp(file.path)
                .resize(300, 300)
                .toFormat("jpeg")
                .jpeg({ quality: 90 })
                .toFile(`public/images/blogs/${file.filename}`);
            fs.unlinkSync(file.path);
        })
    );
    next();
};

module.exports = { uploadPhoto, productImgResize, blogImgResize };