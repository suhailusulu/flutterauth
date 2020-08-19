const monongoos=require("mongoose")
const dbConfig=require('./dbconfig')

const connectDB =async()=>{

    try{
        const conn = await monongoos.connect(dbConfig.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('MongoDB connected: $ {conn.connection.host}')
    }
    catch(err)
    {

        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB