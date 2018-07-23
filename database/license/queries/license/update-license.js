module.exports =
    `UPDATE license
    SET
        price = :price,
        count = :count,
        order_id = :orderId,
        currency = :currency,
        subscriber_id = :subscriberId,
        modified_time = now(),
        modifier_id = :modifierId
        where id = :id`;
