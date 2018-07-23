module.exports =
    `UPDATE address
    SET
    line_1 = :line1,
    line_2 = :line2,
    line_3 = :line3,
    city = :city,
    zipcode = :zipcode,
    state = :state,
    country = :country,
    other = :other,
    modified_time = now(),
    modifier_id = :modifierID
    WHERE user_id = :userId`;