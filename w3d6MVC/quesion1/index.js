const express =require('express')
const path=require('path');
const app =express();

//set the view engin to ejs 
app.set('view engine','ejs')
app.set('views',path.join(__dirname, "view"));

app.get('/',(req,res)=>{
    const date = new Date();

    res.render('index',{
       time:date.toTimeString(),
       hour:date.getHours()

    })

});










app.use('/css',express.static(path.join(__dirname,'css')));

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`server is running at ${PORT}`)});