module.exports =
    `SELECT * 
    FROM image 
    WHERE uuid = :uuid AND is_purged = 0`;