export default{
    DB:{
        URI: process.env.MONGODB_URI || "mongodb://localhost/ts",
        USER: process.env.MONGODB_USER || "root",
        PASSWORD: process.env.MONGODB_PASSWORD || "2674"
    }
}