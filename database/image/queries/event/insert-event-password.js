module.exports =
    `INSERT INTO authentication
    (
    auth_key,
    value,
    create_time,
    modified_time,
    creator_id,
    modifier_id)
    VALUES(:authKey, :value, now(), null, 1 , null)`;