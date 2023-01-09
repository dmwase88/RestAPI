import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
const router = express.Router();

let members = []

router.get('/' , (req,res)=> {
    res.json(members)
});

router.post('/' , (req,res)=> {
    const member = req.body;

    members.push({ ...member, id: uuidv4() });
 
 res.send(`Member with name ${member.firstName} was added succesfully`)
});

router.delete('/:id' ,(req,res) =>{

    const { id } =req.params;
    members = members.filter((member)=> member.id !== id);
    res.send (`User with ${uuidv4() } deleted `);
});


router.get ('/:id', (req,res) => {
const { id } = req.params;
const memberid = members.find((member) => member.id === id );
 res.send(memberid);

})

router.patch ('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName , lastName , age } = req.body;
    const userpatch = members.find((member) => member.id === id );

if(firstName){
userpatch.firstName = firstName;
}

if(age){
    userpatch.age = age;
}

if(lastName){
    userpatch.lastName = lastName;
}
res.send(`Customer with ${id} has been updated`);

 })


export default router;

