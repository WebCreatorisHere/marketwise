import mongoose from "mongoose";
const connectdb = async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}`, {
          useNewUrlParser: true,
        });
      } catch (error) {
        console.error(error)
      }
}
export default connectdb