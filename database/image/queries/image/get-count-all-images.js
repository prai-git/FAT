module.exports =
    `SELECT count(*) as counts
    FROM image where is_purged = 0`;