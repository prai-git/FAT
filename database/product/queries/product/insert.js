module.exports =
    `INSERT INTO product
        ( 
        product_category_id,
        name,
        photo,
        description,
        create_time, 
        modified_time, 
        creator_id, 
        modifier_id)
        VALUES(:productCategoryId, :name , :photo, :description, now(), null, 1 , null)`;