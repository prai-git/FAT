module.exports =
    `INSERT INTO location_marker
        ( 
        name,
        address,
        lat,
        lng,
        type,
        create_time, 
        modified_time, 
        creator_id, 
        modifier_id)
        VALUES(:name, :address , :lat, :lng, :type, now(), null, 1 , null)`;