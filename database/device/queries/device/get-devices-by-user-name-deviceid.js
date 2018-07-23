module.exports =
    `SELECT * FROM user 
        INNER JOIN subscriber on ( user.subscriber_id = subscriber.id)
        INNER JOIN device_info on ( device_info.subscriber_id = subscriber.id )
        where  user.name = :name and device_info.device_id = :deviceId`;