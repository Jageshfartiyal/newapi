const express = require("express");
const { User } = require("../db/user");
const router = new express.Router();
const validator = require("validator");

router.get('/data', async(req,res)=>{
  try{
    const users = await User.find()
    res.json(users)
   } catch(err){

      res.send('error'+ err)
  }
  
})
// API for signup
router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(e);
  }
});

router.get('/', async(req,res)=>{
  try{
    const users = await User.find()
    res.json(users)
   } catch(err){

      res.send('error'+ err)
  }
  
})
// API for login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send("Please enter valid credentials");
    } else {
      const password = await User.findOne({ password: req.body.password });
      if (!password) {
        res.send("Please enter valied credentials");
      } else {
        console.log(user);
        res.send({ user });
      }
    }
  } catch (e) {
    res.status(400);
  }
});


module.exports = router;
