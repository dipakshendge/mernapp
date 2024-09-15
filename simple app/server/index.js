require('dotenv').config();
let express= require ('express')
let connectDb = require("./utils/db");
let cors= require("cors");

const app= express();
let port=4000;
let authRouter= require( './routes/auth_route');
let contactRouter = require('./routes/contact_route')
let serviceRouter = require("./routes/service_route");
let adminRouter = require("./routes/admin_route")
const errorMiddleware = require('./middlewares/error_middleware');
var corsOptions = { 
  origin: ["http://localhost:5173","http://localhost:5174", ],
  methods:"GET, POST, PUT, DELETE, HEAD",
  credentials:true               
}
 
app.use(cors(corsOptions));
app.use(express.json())
app.use('/api/auth',authRouter); 
app.use('/api/form', contactRouter);
app.use('/api/data',serviceRouter);
app.use('/api/admin',adminRouter);
app.use(errorMiddleware)   

connectDb().then(() => {
  app.listen(port,() => { 
    console.log(`server is listeming on post ${port}`)
  })
})
 
