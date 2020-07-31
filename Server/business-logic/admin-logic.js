const dal = require("../data-access-layer/dal");

async function addProduct(item) {
    const sql = 'INSERT INTO products VALUES(DEFAULT, ?, ?, ?, ?, ?)'
    const addedProduct = await dal.executeAsync(sql, [item.itemName, item.price, item.imageUrl, item.itemDescription, item.catID]);
    return addedProduct;
}

async function editProduct(item) {
    const sql =  `UPDATE products SET productId =${item.productID}, itemName='${item.itemName}', price =${item.price}, imageUrl ='${item.imageUrl}', itemDescription ='${item.itemDescription}', catID =${item.catID} WHERE productId =${item.productID}`
    const addedProduct = await dal.executeAsync(sql);
    return addedProduct;
}

module.exports = {
    addProduct,
    editProduct

}
