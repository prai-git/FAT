module.exports =
    `UPDATE offer
    SET
        type = :type, 
        code = :code,
        description = :description,
        min_price = :minPrice,
        min_quantity = :minQuantity,
        modified_time = now(),
        modifier_id = :modifierId
        WHERE id = :id`;