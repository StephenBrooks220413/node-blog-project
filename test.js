const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

BlogPost.create({
    title: 'Web Developers are the future.',
    body: 'When you need a fullstack web developer, contact Stephen Brooks: stephenbrooks714@gmail.com'
}, (error, blogpost) => {
    console.log(error,blogpost)
})
