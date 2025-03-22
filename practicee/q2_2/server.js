const mongoose = require('mongoose');
const express = require('express');

mongoose.connect("mongodb://localhost:27017/Q2_2").then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
});


const userSchema = new mongoose.Schema({
    name: String,
    salary: Number
})

const userModel = mongoose.model("user", userSchema);

const app = express();

app.use(express.json());

app.post("/add", async (req, res) => {
    const data = new userModel(req.body);
    const result = await data.save(data);
    console.log("data inserted");
    res.json(result);
})
app.get("/info", async (req, res) => {
    const result = await userModel.find();
    console.log("data displayed");
    res.json(result);
})
app.patch("/update", async (req, res) => {
    const { id, name, salary } = req.body;
    const result = await userModel.findByIdAndUpdate({ _id: id }, { name: name, salary: salary });
    console.log("data updated");
    res.json(result);
})

app.delete("/delete/:id", async (req, res) => {
    const result = await userModel.findByIdAndDelete(req.params.id);
    console.log("data deleted");
    res.json(result);
})

app.listen(2000,()=>{
    console.log("connected to server")
})