module.exports =
    `SELECT 
        ( select count(*) FROM image WHERE is_purged = 0 AND image.user_id = u.id) as image_count, 
        ( select count(*) FROM folder WHERE folder.user_id = u.id) as folder_count,
        ( select sum(file_size) FROM image WHERE is_purged = 0 and image.user_id = u.id) as total_disk_space,
        ( select sum(count) FROM license WHERE subscriber_id = u.subscriber_id) as license_count,
        u.id,  u.uuid, u.email, u.name, u.type, u.phone, u.status, u.create_time, subscriber_page.logo, subscriber_page.company_name, u.subscriber_id, u.agency_name, subscriber_page.contact_person, 
        CASE 
            WHEN u.subscriber_id = 0 THEN 0
            ELSE subscriber.license_id
        END as license_id
        FROM user as u 
        LEFT JOIN subscriber  on ( u.subscriber_id = subscriber.id)
        LEFT JOIN subscriber_page on ( subscriber_page.id = subscriber.subscriber_page_id) ORDER BY create_time ASC   
        limit 1000`;