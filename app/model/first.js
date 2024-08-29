import mongoose from "mongoose";
const {Schema,model}=mongoose

const firstSchema = new Schema({
    name:{type:String},
company:{type:String},
email:{type:String},
message:{type:String},
})

export default mongoose.models.hellos || model("hellos", firstSchema) ;