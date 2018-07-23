module.exports =
`SELECT auth_key 
FROM authentication 
WHERE auth_key = :authKey and value = :value`;