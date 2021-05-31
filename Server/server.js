const express = require('express');
const cors = require('cors');
const path = require('path');
const bookRoutes = require("./Routes/bookshop");
const usersRoutes = require('./Routes/users');
const blogRoutes = require('./Routes/blog');
const contactUsRoutes = require('./Routes/contactUs');
const app = express();


app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', bookRoutes);

app.use('/users', usersRoutes);

app.use('/blog', blogRoutes);

// app.use('/contact', contactUsRoutes);

app.listen(process.env.PORT || 3006, () => {console.log("server is running..")});