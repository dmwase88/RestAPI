import express from 'express';

//import members from '../controllers/memberscontroller.js'

const router = express.Router();
const members = [
    {
        "firstName" : "Ethan",
        "lastName" : "Mwase",
        "id": 1,
        "age": 8
    },

    {
        "firstName" : "james",
        "lastName" : "gary",
        "id": 2,
        "age": 40
    },

    {
        "firstName" : "john",
        "lastName" : "doe",
        "id": 3,
        "age": 20
    }

]



router.get('/' , (req,res)=> {
    res.json(members)
});

router.post('/' , (req,res)=> {
    const member = {
        id:members.length + 1,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age
 }
 members.push(member)
 res.status('200').send('Member was added successfully')
});
export default router;

