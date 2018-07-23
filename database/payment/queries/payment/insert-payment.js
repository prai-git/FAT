module.exports =
    `INSERT INTO payment
(
user_id,
payment_date, 
payment_amount, 
order_id,
buyer,
payment_json,
currency,
create_time, 
modified_time, 
creator_id, 
modifier_id)
VALUES(:userId, :paymentDate, :paymentAmount, :orderId , :buyer, :paymentJson, :currency, now(), null, 1 , null)`;