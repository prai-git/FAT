module.exports =
    `INSERT INTO supplier_item
        ( 
        name,
        description,
        photo
        user_id,
        product_id,
        category_id,
        create_time, 
        modified_time, 
        creator_id, 
        modifier_id)
        VALUES(:name, :s ,userId, :productId , :categoryId, now(), null, 1 , null)`;