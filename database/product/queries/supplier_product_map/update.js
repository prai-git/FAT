module.exports =
    `UPDATE supplier_product_map
        SET
        product_id = :productId
        WHERE supplier_id = :supplierId`;