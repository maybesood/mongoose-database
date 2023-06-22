const mongoose=require("mongoose");
const User=require("./User");

mongoose.connect('mongodb://127.0.0.1:27017/test');


run()
async function run(){
    const user=await User.create({
        name:"Kyle",
        age:87,
        email:"himansh@gmail.com",
        hobbies:["weight lifting","reading coho"]
    })
    console.log(user)
}


// find by function
// async function run(){
//     const user=await User.findById("649355c09ddee666f984be0e")
//     console.log(user)
// }




    