const express=require('express');
const app=express();
require('./config/conn');
const port =process.env.PORT || 3001

app.use(express.json({extended:false}));
app.get('/',(req,res)=>{
    res.send("welcome");
})

app.use('/api/users',require('./routes/user'));
app.use('/api/auth',require('./routes/login'));
app.use('/api/image',require('./routes/image'))

app.listen(port,()=>{
    console.log(`server running at port no:${port}`);
})