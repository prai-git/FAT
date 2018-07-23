module.exports =
    `UPDATE user_supplier_info
    SET
    location_marker_id = :locationMarkerId , 
    status = :status,
    average_rating = :averageRating,
    modified_time = now(),
    modifier_id = :userId
    WHERE user_id = :userId`;