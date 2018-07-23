module.exports =
    `SELECT * 
    FROM order_item_inventory 
    WHERE order_item_id = :orderItemId`;