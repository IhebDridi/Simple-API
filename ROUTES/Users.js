const express = require("express");

const router = express.Router();

//used to construct the user object
const User = require("../Models/UserModel");



//ROUTES
//Remember to undo "async" if you want to use classic

//Get all the users
router.get("/",async (req, res) => {
    //The classic way of getting data
    /*
    res.status(200).send("The users");
    console.log('this is a middleWare running');*/
    //The Async way to get data
    try{
        //.find() is a mongodb method from mongoose
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.json( {Message: err} )
    }
});
//Remember to undo "async" if you want to use classic

//Submit a user
router.post("/", async (req, res) => {

    //console.log(req.body);
    const user = new User({
        Name: req.body.Name
    });
    //The classic way of saving data
    /*/
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.status(400).send(err);
    })*/
    //using Async function to save data
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch(err)
    {
        res.json( {Message: err})
    }

})

//Get a specific user
router.get("/:userId", async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        
        res.json(user)
    }
    catch(err)
    {
        res.status(400).send(err);
        res.json({Message: "bad Id"})
    }

});
//Delete User
router.delete("/:userId", async (req, res) =>{
    try{
        const removedUser = await User.deleteOne({_id: req.params.userId})
        res.json(removedUser)
    }
    catch(err)
    {
        res.status(400).send(err);
        res.json({Message: "bad Id"})
    }

})
//Update User
router.patch("/:userId", async (req,res) =>    {
    try{
        const UpdatedUser = await User.updateOne({ _id : req.params.userId},
            { $set: {Name: req.body.Name} });
            
        res.json(UpdatedUser);
    }
    catch(err)
    {
        //res.send(err);
        res.json({Message: err});
    }

})

module.exports = router;