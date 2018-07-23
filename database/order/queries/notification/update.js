module.exports =
    `UPDATE notification
    SET
        from = :from, 
        to = :to,
        subject = :subject,
        content = :content,
        status = :status,
        type = :type,
        modified_time = now(),
        modifier_id = :modifierId
        WHERE id = :id`;