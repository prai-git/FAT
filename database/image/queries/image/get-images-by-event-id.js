module.exports =
    `SELECT * 
    FROM image 
    WHERE folder_id = :folderId 
    AND user_id = :userId AND is_purged = 0`;