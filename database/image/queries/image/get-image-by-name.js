module.exports =
    `SELECT * 
    FROM image 
    WHERE name = :name AND is_purged = 0`;