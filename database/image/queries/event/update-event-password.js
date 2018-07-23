module.exports =
    `UPDATE authentication
    SET
    value = :value
    WHERE auth_key = :authKey`;