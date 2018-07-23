module.exports =
    `SELECT u.id, u.uuid, u.email, u.name, u.phone, u.status, u.type, u.photo, u.create_time, 
    address.type as address_type, address.zipcode, 
    address.line_1, address.line_2, address.line_3, 
    address.city, address.state, address.country, address.other 
    FROM user as u INNER JOIN address  on ( u.id = address.user_id) where u.phone = :phone`;