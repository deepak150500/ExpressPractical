const userModel = require('../model/empModle.js');

const add = async (req,res)=>{
    const data = new userModel(req.body);
    const result = await data.save();
    res.json(result);
}

const update = async (req,res)=>{
    const {id,name,salary} = req.body;
    const result = await userModel.findByIdAndUpdate({_id:id},{name,salary});
    res.json({
        message:"data updated",
        data:result
    })
}
const deleteUser = async (req,res)=>{
    const {id} = req.body;
    const result = await userModel.findByIdAndDelete({_id:id});
    res.json({
        message:"data deleted",
        data:result
    })
}
const show = async (req,res)=>{
    const result = await userModel.find();
    res.json({
        message:"user list",
        data:result
    })
}

module.exports = {add,update,deleteUser,show}