module.exports =
    `UPDATE product
    SET
    product_category_id = :productCategoryId , 
    name = :name,
    photo = :photo,
    description = :description,
    modified_time = now(),
    modifier_id = :modifierId
    WHERE id = :id`;