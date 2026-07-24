import express from "express"
import dotenv from "dotenv" //see how to import .env
import connectDb from "./config/connectDb.js"
import cookieParser from"cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:"https://interviewiq-1-uyv3.onrender.com",
    credentials:true
}))



app.use("/api/auth", authRouter)
app.use("/api/user",userRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/payment" , paymentRouter)


console.log(process.env.PORT)
const PORT = process.env.PORT || 6000;
app.get("/", (req, res) =>{
    return res.json({
        message: "Server Started, how are you"
    })
})



app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
    connectDb()
}
)
