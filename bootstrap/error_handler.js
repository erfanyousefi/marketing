module.exports = (app) => {
    //If request is here , then an error has been occurred
    app.use((err, req, res, next) => {
        // Respond with json
        //TODO :: remove this later
        console.log(err)

        //TODO :: add ApiResponse Format
        return res.send(err.message)
    });
}