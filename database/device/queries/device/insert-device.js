module.exports =
    `INSERT INTO device_info
    (
        device_id,
        name,
        type,
        description,
        subscriber_id,
        license_id,
        create_time,
        modified_time,
        creator_id,
        modifier_id)
        VALUES (:deviceId, :name, :type ,
             :description, :subscriberId,
             :licenseId, now(), null, 1, null)`;