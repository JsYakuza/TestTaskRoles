const db = require('../models/index');

class PostService {

    async getAllPosts() {
        return await db.Posts.findAll();
    }

    async createNewPost(post) {
        const newPost = await db.Posts.build({
            title: post.title,
            description: post.description,
            author: post.author,
            userId: post.userId
        });
        await newPost.save();
    }

    async changePost(post) {
        await db.Posts.update({
            title: post.title,
            description: post.description,
            author: post.author,
            userId: post.userId
        }, { where: { title: post.oldTitle } })
    }
}

module.exports = new PostService();