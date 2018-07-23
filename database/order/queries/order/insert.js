module.exports =
    `INSERT INTO order
        ( 
            payment_id,
            user_id,
            offer_id,
            name,
            status,
            create_time, 
            modified_time, 
            creator_id, 
            modifier_id)
            VALUES(:paymentId, :userId , :offerId, :name, :status, now(), null, 1 , null)`;