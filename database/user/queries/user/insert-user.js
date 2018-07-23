module.exports =
    `INSERT INTO user
(
uuid, 
email, 
name,
photo,
phone, 
status, 
create_time, 
modified_time, 
creator_id, 
modifier_id)
VALUES(:uuid, :email , :name, :photo, :phone , 0 , now(), null, 1 , null)`;