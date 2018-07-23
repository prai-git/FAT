module.exports =
    `INSERT INTO address
        ( 
            user_id,
            type,
            line_1,
            line_2,
            line_3,
            city,
            zipcode,
            state,
            country,
            other,
            create_time, 
            modified_time, 
            creator_id, 
            modifier_id)
            VALUES(:userId, :type, :line1, :line2 , :line3, :city, :zipcode, :state, :country, :other, now(), null, 1 , null)`;