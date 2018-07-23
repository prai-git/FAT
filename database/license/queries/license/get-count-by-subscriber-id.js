module.exports =
    `SELECT sum(count) as license_count
        FROM license 
        where subscriber_id = :subscriberId`;