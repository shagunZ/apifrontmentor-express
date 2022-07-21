const express = require('express');
const path = require('path');

const ejsMate = require('ejs-mate')


const app = express();
app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

//req to parse the body| middleware
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    // res.send('HELLO FROM SUMMER CAMP');
    res.render('home')
})

// app.get('/edit',(req,res)=>{
//     // res.send('HELLO FROM SUMMER CAMP');
//     res.render('campgrounds/edit')
// })

app.get('/pricing',async (req,res)=>{
  res.render('campgrounds/pricing')
})

app.get('/about',(req,res)=>{
    res.render('campgrounds/about');
})


app.get('/contact',async(req,res)=>{
    res.render('campgrounds/contact');
})





app.listen (8880,()=>{
    console.log("serving on port 8880");
})