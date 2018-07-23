module.exports =
    `UPDATE product_category
    SET
    parent_category_id = :parentCategoryId , 
    name = :name,
    photo = :photo,
    description = :description,
    modified_time = now(),
    modifier_id = :modifierId
    WHERE id = :id`;