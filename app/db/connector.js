import mongoose from "mongoose";

const connectdb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://yashthecool:aajbluehaipanipani@cluster12.wd89a.mongodb.net/marketwise", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectdb;