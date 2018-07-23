module.exports =
    `INSERT INTO user_customer_info
        ( 
        user_id,
        location_marker_id,
        status,
        average_rating,
        create_time, 
        modified_time, 
        creator_id, 
        modifier_id)
        VALUES(:userId, :locationMarkerId , :status, :averageRating, now(), null, 1 , null)`;