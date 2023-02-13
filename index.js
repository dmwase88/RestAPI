import express from 'express';
import members from './Routes/members.js';
const app = express()
const PORT =5000;
app.use(express.json());
app.use('/members', members);
app.get('/', (req,res)=> {
    res.send('Hello There from homepage')
});
app.listen(PORT,() => console.log(`Server is now  Running on port ${PORT}`));

