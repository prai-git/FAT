module.exports =
    `INSERT INTO license
    (
        price,
        count,
        order_id,
        currency,
        subscriber_id,
        create_time,
        modified_time,
        creator_id,
        modifier_id)
        VALUES (:price, :count, :orderId ,
             :currency , :subscriberId, 
             now(), null, 1, null)`;