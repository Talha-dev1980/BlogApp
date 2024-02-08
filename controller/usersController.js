const Users = require("../models/users")

const getUsers = async (req, res) => {
    const users = await Users.findAll();
    res.status(200).json({ error: false, users: users })
}
const addUser = async (req, res) => {
    try {
        const user = req.body
        console.log(user)
        if (user) {
            const newUser = await Users.create(user)
            res.status(200).json({ error: false, message: newUser })
        } else {
            res.status(400).json({ error: true, message: 'Task is not right' })
        }
    }
    catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}
const getUser = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id)

        if (user) {
            res.status(200).json({ error: false, user: user })
        } else {
            res.status(404).json({ error: false, message: "User not found" })
        }
    } catch (error) {
        res.status(400).json({ error: true, message: error })
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const row = await Users.destroy({where:{id}})
        if (row > 0) {
            res.status(200).json({ error: false, message: `${row} user on id ${id} is deleted`})
        } else {
            res.status(400).json({ error: false, message: `user on id ${id} does not exist`})
        }
    } catch (error) {
        res.status(400).json({ error: true, message: "we got some error"+error })
    }
}
const updateUser=async (req,res)=>{
    try{
        const id=req.params.id
        const user= await Users.findByPk(id)
        if(user){
            const updated=req.body
            user.update(updated)
            const updatedTask = await Users.findByPk(id)
     
            res.status(200).json({error:true,message:updatedTask})
        }else{
            res.status(200).json({error:false,message:"user not found"})
        }
    }catch(error){
        res.status(400).json({ error: true, message: "We have an error"+error })
    }
}
module.exports = {
    getUsers,
    addUser,
    getUser,
    deleteUser,
    updateUser
}