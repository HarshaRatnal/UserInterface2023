const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    postcontent : String,
    userId : String
})


async function newPost(postcontent) {
    
  
    const newPost = await Post.create({
        postcontent : postcontent
    });
  
    return newPost._doc;
  }
  

  
  // UPDATE
  async function updatePost(id, postcontent) {
    const post = await Post.updateOne({"_id": id}, {$set: { postcontent : postcontent}});
    return post;
  }
  
  //DELETE
  async function deletePost(id) {
    await Post.deleteOne({"_id": id});
  };
  
  // utility functions
  async function getPost(postcontent) {
    return await Post.findOne({ "postcontent": postcontent});
  }
  
  // 5. export all functions we want to access in route files
  module.exports = { 
      newPost, getPost, updatePost, deletePost
  };