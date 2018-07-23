module.exports =
    `UPDATE order
    SET
    payment_id = :paymentId, 
    name = :name,
    user_id = :userId,
    status = :status,
    offer_id = :offerId
    modified_time = now(),
    modifier_id = :modifierId
    WHERE id = :id`;