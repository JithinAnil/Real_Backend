const express = require('express')
const app = express()
const mongoose= require('mongoose')
const houseRouter = require('./models/HouseSchema')
const enquiryRouter = require('./models/EnquirySchema')
const userRouter = require('./models/UserSchema')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const cors = require('cors')

app.use(express.json())
app.use(cors())



const db = module.exports = async()=> {
    try{
        await mongoose.connect(process.env.MONGOBDURL,{
            user : process.env.DBUSER,
            pass : process.env.DBPASS
        })
        console.log("MongoDB Connection is successful")
    }catch(e){
        console.log(e);
        console.log("MongoDB Connection is not successful")
    }
}
db();

app.use("/houses/",houseRouter)
app.use("/enquiry/",enquiryRouter)
app.use("/user/",userRouter)




app.listen(port, () => {
  console.log('Server running on port 5000')
})
