module.exports =
    `SELECT user.id, user.contact_person, subscriber.id as subscriber_id, device_info.device_id FROM device_info 
    INNER JOIN subscriber on ( device_info.subscriber_id = subscriber.id )
    INNER JOIN user on ( user.subscriber_id = subscriber.id)
    where  user.name = :name`;