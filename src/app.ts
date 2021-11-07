import express  from "express";
import morgan from "morgan";
import cors from "cors";


import authRoutes from "./routes/auth.routes";



const app = express();

//config
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//routes
app.get('/', (req, res) => {res.send('Hello')})
app.use(authRoutes);


export default app;