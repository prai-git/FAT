module.exports =
    `INSERT INTO supplier_item_details
        ( 
        supplier_item_id,
        photo,
        description,
        create_time, 
        modified_time, 
        creator_id, 
        modifier_id)
        VALUES(:supplierItemId, :photo , :description, now(), null, 1 , null)`;