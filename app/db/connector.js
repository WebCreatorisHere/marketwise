import mongoose from "mongoose";
const connectdb = async()=>{
    try {
       await mongoose.connect("mongodb+srv://yashthecool:aajbluehaipanipani@cluster12.wd89a.mongodb.net/marketwise", {
          useNewUrlParser: true,
        });
      } catch (error) {
        console.error(error)
      }
}
export default connectdb