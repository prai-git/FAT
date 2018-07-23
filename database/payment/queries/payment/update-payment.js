module.exports =
    `UPDATE payment
    SET
    payment_date  = :paymentDate , 
    payment_amount = :paymentAmount , 
    order_id = :orderId,
    buyer = :buyer,
    modified_time = now(),
    modifier_id = :modifierID
    WHERE id = :id`;    