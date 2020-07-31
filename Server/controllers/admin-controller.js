const express = require('express');
const router = express.Router();
const fileUpload = require("express-fileupload");
const uuid = require("uuid");
router.use(fileUpload());
const fs = require("fs");
const adminLogic = require('../business-logic/admin-logic');
const sendError = require("../helpers/send-error");

router.post('/add-image', async (request, response) => {
    const item = request.body;

    try {
        if (request.files) {
            const file = request.files.imageUrl;
            const extension = file.name.substr(file.name.lastIndexOf("."));
            const newFile = uuid.v4() + extension;
            file.mv("./uploads/" + newFile);
        }
    } catch (error) {
        sendError(response, error);
    }
});

router.post('/add-product', async (request, response) => {
    const item = request.body;
    try {
        console.log(item)
        //? if no file - future error
        if (request.files) {
            const file = request.files.imageUrl;
            const extension = file.name.substr(file.name.lastIndexOf("."));
            const newFile = uuid.v4() + extension;
            file.mv("./uploads/" + newFile);
        }

        // const product = await productLogic.addProduct(item, newFile);
        const product = await productLogic.addProduct(item);
        response.json(product);
    } catch (error) {
        sendError(response, error);
    }
});

router.patch('/update-item', async (request, response) => {
    const item = request.body;
    try {
        const updateProduct = await adminLogic.editProduct(item);
        response.json(updateProduct);
    } catch (error) {
        sendError(response, error);
    }
});

module.exports = router;
