module.exports =
    `INSERT INTO user_supplier_info
        ( 
        user_id,
        location_marker_id,
        status,
        average_rating,
        accept_tc,
        create_time, 
        modified_time,

        creator_id, 
        modifier_id)
        VALUES(:userId, :locationMarkerId , :status, :averageRating, acceptTc, now(), null, 1 , null)`;