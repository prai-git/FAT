module.exports =
    `UPDATE image
    SET
    scheduled_purge_time = new(),
    is_purged = 1,
    modified_time = now() 
     WHERE name = :name`;