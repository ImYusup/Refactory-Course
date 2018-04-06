module.exports =  function logMiddleware(req, res, next) {
    console.log("fucking shit", new Date(), req.url);
    next();
}