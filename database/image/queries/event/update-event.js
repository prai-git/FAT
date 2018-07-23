module.exports =
    `UPDATE folder
    SET
    parent_id = :parentId,
    name = :name,
    description = :description,
    type = :type,
    modified_time = now(),
    modifier_id = :modifierId 
    WHERE id = :id`;