module.exports = {
    post: 3000,
    url: "mongodb://luckydong:fqd965@127.0.0.1:27017/admin",
    session: {
        name: 'SID',
        secret: 'SID',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 365 * 24 * 60 * 60 * 1000,
        }
    }
}