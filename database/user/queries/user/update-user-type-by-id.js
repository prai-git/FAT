module.exports =
    `UPDATE user
    SET
    email = :email , 
    name = :name,
    photo = :photo, 
    status = :status,  
    modified_time = now(),
    modifier_id = :modifierID
    WHERE id = :id`;