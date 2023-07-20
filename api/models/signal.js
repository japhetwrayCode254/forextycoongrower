import mongoose from 'mongoose';
const { Schema } = mongoose;

const SignalSchema = new Schema({
  forex: {
    type:String,
    required:true,
  }, // String is shorthand for {type: String}
  type:{
    type:String,
    required:true,
    
  } ,
  entry:{
    type:String,
    required:true,
    
  } ,
  tp1:{
    type:Number,
    required:true,
  } ,
  tp2:{
    type:Number,
    required:true,
  }, 
  stoploss:{
    type:Number,
    required:true,
  }, 
  status:{
    type:String,
    required:true,
  }, 
  profit:{
    type:String,
    required:true,
  }, 
  
},
{timestamps:true }
);

export default mongoose.model("Signal",SignalSchema);