const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`----------Mongo connected : ${connection.connection.host}---------------`);
    } catch (error) {
        console.log("Failed to connect : " , error);
    }
}

module.exports = connectDb