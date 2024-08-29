import mongoose from "mongoose";
const {Schema,model}=mongoose

const contactschema = new Schema({
    name:{type:String},
    company:{type:String},
    email:{type:String},
    budget:{type:String},
    playlists:{type:String},
    comment:{type:String},
})

export default mongoose.models.Contact || model("Contact",contactschema)