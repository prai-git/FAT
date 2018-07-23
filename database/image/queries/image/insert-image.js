module.exports =
    `INSERT INTO image
    (
    version,
    file_descriptor,
    user_id,
    folder_id,
    display_name,
    url,
    bucket_key,
    bucket_name,
    name,
    type,
    mime_type,
    file_size,
    create_time,
    modified_time,
    creator_id,
    modifier_id)
    VALUES (:version, :fileDescriptor, :userId , 
        :folderId , :displayName, :url, :key, :bucket, :name, :type, 
        :mimeType , :fileSize, now(), null, 
        1, null)`;