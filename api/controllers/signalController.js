
import Signal  from "../models/signal.js";
// import User from "../models/user.js"
export const createSignal =async (req,res)=>{
    try {
        const newSignal =new Signal(req.body);
        const savedSignal= await newSignal.save();
        res.status(200).json(savedSignal)
    } catch (error) {
        console.error(error)
    }
}

export const updateSignal=async(req,res)=>{
    try {
       const signal = await Signal.findOneAndUpdate({forex:req.body.forex})
       if(!signal){
        res.status(404).send("No signal to update")
       }
    } catch (error) {
       console.error(error) 
    }
}
export const getSignals=async(req,res)=>{
    try {
       const signal = await Signal.find()
       res.status(200).json(signal)
    } catch (error) {
       console.error(error) 
    }
}
export const DeleteSignal=async(req,res)=>{
    try {
        const signal = await Signal.findOneAndDelete({forex:req.body.forex})
        if(!signal){
         res.status(404).send("No signal to delete")
        }
     } catch (error) {
        console.error(error) 
     }
}
export const SortSignal=async(req,res)=>{
    try {
        await Signal.find({}).sort({date: -1}).exec((err, docs) => { 
            if(err){
                res.status(401).send("error occured")
            }else{
                res.status(200).send(docs)
            }
        });
    } catch (error) {
        console.error(error)
    }
}