module.exports =
    `SELECT count(*) as counts
    FROM image 
    WHERE user_id = :userId AND is_purged = 0`;