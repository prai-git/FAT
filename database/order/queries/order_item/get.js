module.exports =
    `SELECT * 
    FROM order_item 
    WHERE order_id = :orderId`;