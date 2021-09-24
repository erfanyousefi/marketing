const PORT = process.env.PORT || 3000;

module.exports = (app) => {
    //Server port
    app.listen(PORT, () => {
        console.log("Server running on port : " + PORT);
    });
}