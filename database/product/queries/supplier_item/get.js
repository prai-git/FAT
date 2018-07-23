module.exports =
    `SELECT dt.photo, dt.name, dt.description, sp.id, sp.product_id, sp.category_id, sp.user_id,  
    sp.modifier_id, sp.creator_id, sp.create_time, 
    sp.modified_time FROM supplier_item as sp INNER JOIN supplier_item_details as dt  on ( sp.id = dt.suplier_item_id)
    WHERE user_id = :userId`;