module.exports =
    `INSERT INTO product_category
        ( 
        parent_category_id,
        name,
        photo,
        description,
        create_time, 
        modified_time, 
        creator_id, 
        modifier_id)
        VALUES(:parentCategoryId, :name , :photo, :description, now(), null, 1 , null)`;