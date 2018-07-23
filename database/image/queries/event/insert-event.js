module.exports =
    `INSERT INTO folder
    (
    parent_id,
    user_id,
    name,
    description,
    type,
    create_time,
    modified_time,
    creator_id,
    modifier_id)
    VALUES(:parentId, :userId, :name , :description, 
        :type, now(), null, 1 , null)`;