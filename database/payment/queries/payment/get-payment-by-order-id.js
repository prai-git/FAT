module.exports =
    `SELECT * 
    FROM payment 
    WHERE order_id = :orderId`;