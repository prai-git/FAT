module.exports =
    `SELECT * 
    FROM image 
    WHERE id = :id AND is_purged = 0`;