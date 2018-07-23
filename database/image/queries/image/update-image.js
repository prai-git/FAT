module.exports =
    `UPDATE image
    SET
    version = :version,
    file_descriptor = :fileDescriptor,
    user_id = :userId,
    folder_id = :folderId,
    display_name = :displayName,
    name = :name,
    type = :type,
    mime_type = :mimeType,
    scheduled_purge_time = :scheduledPurgeTime,
    is_purged = :isPurged,
    file_size = :fileSize,
    total_disk_space_used = :totalDiskSpaceUsed,
    modified_time = now(),
    modifier_id = :modifierId
    where id = :id`;
