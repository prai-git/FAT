module.exports =
    `UPDATE location_marker
    SET
    type  = :type , 
    name = :name,
    address = :address,  
    lat = :lat,
    lng = :lng , 
    modified_time = now(),
    modifier_id = :modifierID
    WHERE id = :id`;