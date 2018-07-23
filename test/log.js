module.exports.log = function(err, result, method) {
    if (err) console.log(method + " : " + err);
    console.log(result);
}