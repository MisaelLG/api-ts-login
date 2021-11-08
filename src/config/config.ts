export default{

    jwtSecret: process.env.JWT_SECRET || 'thisapifromts',

    DB:{
        URI: process.env.MONGODB_URI || "mongodb://root:2674@localhost:27017/ts?ssl=false&authSource=admin",
        USER: process.env.MONGODB_USER || "root",
        PASSWORD: process.env.MONGODB_PASSWORD || "2674"
    }
}