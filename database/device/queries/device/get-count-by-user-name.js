module.exports =
    `SELECT count(*) as count FROM device_info 
    INNER JOIN subscriber on ( device_info.subscriber_id = subscriber.id )
    INNER JOIN user on ( user.subscriber_id = subscriber.id)
    where  user.name = :name`;