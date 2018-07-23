module.exports =
    `UPDATE user_customer_info
    SET
    location_marker_id = :locationMarkerId , 
    average_rating = :averageRating,
    accept_tc = :acceptTc,
    modified_time = now(),
    modifier_id = :userId
    WHERE user_id = :userId`;