const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


app.listen('80',()=>{
    console.log('listening to port 3000');
})



app.get('/', (req, res)=>{
    res.render('main.ejs')
})
