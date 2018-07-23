module.exports =
    `INSERT INTO supplier_product_map
        ( 
        supplier_id,
        productId)
        VALUES(:supplierid, :productId)`;