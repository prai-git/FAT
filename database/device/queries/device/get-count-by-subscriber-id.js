module.exports =
    `SELECT count(*) as count
        FROM device_info 
        where subscriber_id = :subscriberId`;