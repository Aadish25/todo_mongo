import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    task:{
        type:"String",
        required:true
    },
    status:{
        type:"String",
        enum:["Pending","Completed"],
        required:true
    }
});
const todo=mongoose.model("To-Do",todoSchema);
export default todo;