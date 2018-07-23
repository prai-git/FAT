module.exports =
    `UPDATE supplier_item_details
    SET 
    photo = :photo,
    description = :description,
    modified_time = now(),
    modifier_id = :userId
    WHERE supplier_item_id = :supplierItemId`;