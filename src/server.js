const connect =require("./configs/database.js")

const app =require("./index.js")


app.listen(5000,async(req,res)=>{
    try{
        await connect()

        console.log("Listening to localhost 5000")
    }
    catch (err)
    {
        console.log({message:err.message})
    }
})