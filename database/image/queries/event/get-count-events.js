module.exports =
`SELECT count(*) as counts
FROM folder 
WHERE user_id = :userId`;