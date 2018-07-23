module.exports =
    `UPDATE image
    SET
    scheduled_purge_time = now(),
    is_purged = 1,
    modified_time = now()
    where id = :id`;