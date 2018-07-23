module.exports =
    `UPDATE device_info
    SET
        device_id,
        name,
        type,
        description,
        subscriber_id,
        modified_time = now(),
        modifier_id = :modifierId
        where id = :id`;
