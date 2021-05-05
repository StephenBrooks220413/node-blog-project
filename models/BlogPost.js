const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPost mongoose.model('BlogPost', BlogPostSchema);

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

module.exports = BlogPost