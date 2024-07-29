const express = require('express');

const app = express();

//view engine
app.set('view engine','ejs');

app.listen(3000);

//passing data from our handler to our view
app.get('/',(req,res)=>{
    const blogs = [
        {title:'What is the MERN stack?',snippet:'MongoDB, Express.js, and Node.js help you build the backend of an application, while React powers the frontend. Node.js and React rank as the two most popular web frameworks and technologies'},
        {title:'Database setup with MongoDB',snippet:'MongoDB provides a multi-cloud database service known as Atlas, which simplifies the process of deploying and managing MongoDB databases.'},
        {title:'Server setup with Express.js and Node.js',snippet:'To create a project folder, enter the folder through the terminal, then run $ npm init. It will then ask you some questions about the package name, version, entry point, and more.'},
    ]
    res.render('index',{title:'Home',blogs:blogs});
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new Blog'});
})

//404 page (middleware)
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})